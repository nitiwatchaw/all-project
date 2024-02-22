import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios"


const fetchData = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero)
}



export const useSuperHerosData = (onSuccess, onError) => {
    return useQuery('super-heroes',
        fetchData,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            onSuccess,
            onError,
            // ? data transform
            // select: (data) => {
            //     const superHeroNames = data?.data.map(e => e.name)
            //     return superHeroNames
            // }
        }
    )
}


export const useAddSuperHeroData = () => {

    const queryClient = useQueryClient()

    return useMutation(addSuperHero, {




        // ? การเพิ่มข้อมูล
        // queryClient.invalidateQueries('super-heroes')

        // ?การเพิ่มข้อมูลโดยไม่มี post ในnetwork
        // onSuccess: (data) => {
        //     queryClient.setQueryData('super-heroes', (oldQueryData) => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data]
        //         }
        //     });
        // },


        // ? Optimistic Updates
        onMutate: async (newHero) => {
            await queryClient.cancelQueries('super-heroes')
            const previousHeroData = queryClient.getQueryData('super-heroes')
            queryClient.setQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data,
                    { id: oldQueryData?.data?.length + 1, ...newHero }]
                }
            });
            return {
                previousHeroData,
            }
        },
        onError: (_error, _hero, context) => {
            queryClient.setQueryData('super-heroes', context.previousHeroData)
        },
        onSettled: () => {
            queryClient.invalidateQueries('super-heroes')
        },

    })
}

