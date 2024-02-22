import './App.css'
import GridArea from './GridSection/GridArea'
import Notification from './Notification/Notification'
const App = () => {
  return (
    <>
      <h2>Farm Dashboard</h2>
      <Notification title='HelloNotification' description='ThisIsValueFromNoti' />
      <GridArea />
    </>
  )

}




export default App
