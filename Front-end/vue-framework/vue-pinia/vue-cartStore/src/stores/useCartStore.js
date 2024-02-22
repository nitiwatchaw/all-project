import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast()

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Iphone 14',
                price: 800,
                image: 'https://media.studio7thailand.com/75652/iPhone_14_Plus_Midnight_PDP_Image_Position-1A_Midnight_1-square_medium.jpg',
            },
            {
                id: 2,
                name: 'Samsung s20',
                price: 1200,
                image: 'https://images.samsung.com/is/image/samsung/assets/th/smartphones/galaxy-s20/buy/S20-FE_Navy_SKUimage_MO-img.jpg',
            },
            {
                id: 3,
                name: 'Tv LG',
                price: 300,
                image: 'https://www.lg.com/content/dam/channel/wcms/th/images/tvs-soundbars/oled65c3psa_atm_eath_th_c/gallery/D-5.jpg',
            },
            {
                id: 4,
                name: 'Oppo 14',
                price: 500,
                image: 'https://www.techmoblog.com/uploads/content_images/202306/img_1686725815_6644703c6df5.jpg',
            },

        ],
        cartItems: [],
    }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity += 1
                toast.success('Your item has been updated', {
                    timeout: 2000
                })


            } else {
                item.quantity = 1;
                this.cartItems.push(item)
                toast.success('Your item has been added', {
                    timeout: 2000
                })

            }
        },
        increaseItem(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity += 1
                toast.success('Your item has been updated', {
                    timeout: 2000
                })
            }
        },
        decreaseItem(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems[index].quantity -= 1

                if (this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                }
                toast.success('Your item has been updated', {
                    timeout: 2000
                })
            }
        },
        removeFromCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id)
            if (index !== -1) {
                this.cartItems = this.cartItems.filter(product => product.id !== item.id)
                toast.success('Your item has been remove', {
                    timeout: 2000
                })
            }
        }

    }
})