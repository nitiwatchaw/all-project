import { useState } from 'react'

import './App.css'


interface MyStateType {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
};


function App() {

  //create store
  const [data, setData] = useState<MyStateType>({
    id: "",
    firstName: "",
    lastName: "",
    address: ""
  })


  //tract state
  const inputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => {
      return {
        ...prev, [name]: value
      }
    })
  }


  //display data
  const [dataList, setDataList] = useState<any[]>([])
  const dataDisplay = dataList.map((e) => {
    return (
      <div className='box' key={e.id} >
        <p>FirstName: {e.firstName}</p>
        <p>LastName:{e.lastName}</p>
        <p>Address:{e.address}</p>
        <button
          onClick={() => {
            setEdit(e);
          }}
        >
          Edit Data
        </button>
        <button onClick={() => { deleteData(e.id) }}>Delete</button>
      </div>
    )
  })

  //function add data
  const addData = () => {
    const newData = { ...data };
    newData.id = Date.now().toString()
    setData({
      id: "",
      firstName: "",
      lastName: "",
      address: ""
    });
    setDataList((prev) => {
      return [...prev, newData];
    });
  }

  //function delete data
  const deleteData = (data: string) => {
    setDataList((prev) => {
      return prev.filter((e) => e.id !== data);
    });
  };


  //funtion Edit data
  const [edit, setEdit] = useState<any>(null);


  const editChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEdit((prev: any) => {
      return {
        ...prev, [name]: value
      };
    });
  };

  //funciton edit data
  const editData = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setDataList((prev) => {
      return prev.map((editdata) => {
        if (editdata.id !== edit.id) return editdata;
        return edit;
      });
    });
    setEdit(null);
  };


  let editElement = null;


  if (!!edit) {
    editElement = (
      <div>
        <input
          type="text"
          name="firstName"
          value={edit.firstName}
          placeholder="First Name"
          onChange={editChange}
        />
        <input
          type="text"
          name="lastName"
          value={edit.lastName}
          placeholder="Last Name"
          onChange={editChange}
        />
        <input
          type="text"
          name="address"
          value={edit.address}
          placeholder="Address"
          onChange={editChange}
        />

        <button onClick={editData}>Save</button>
      </div>
    );
  }
  return (
    <div>
      <input type='text' name="firstName" value={data.firstName} placeholder='FirstName' onChange={inputValue} />
      <input type='text' name="lastName" value={data.lastName} placeholder='LastName' onChange={inputValue} />
      <input type='text' name="address" value={data.address} placeholder='Address' onChange={inputValue} />
      <button onClick={addData}>Add data</button>

      {editElement}

      {dataDisplay}
    </div>
  )
}

export default App
