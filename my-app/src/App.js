import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //     <div>
  //         <div>
  //             test
  //             test
  //             test
  //         </div>
  //         <div className="d-flex">
  //             <div className="p-2 flex-fill item">Flex item with a lot of content</div>
  //             <div className="p-2 flex-fill item">Flex item</div>
  //             <div className="p-2 flex-fill item">Flex item</div>
  //         </div>
  //         <div className="d-flex">
  //             <div className="p-2 flex-fill item">Flex item with a lot of content</div>
  //             <div className="p-2 flex-fill item">
  //                 <div>test</div>
  //                 <div>test</div>
  //                 <div>test</div>
  //             </div>
  //             <div className="p-2 flex-fill item">Flex item</div>
  //         </div>
  //         <div className="d-flex">
  //             <div className="p-2 flex-grow-1 item">Flex item with a lot of content</div>
  //             <div className="p-2 item">Flex item</div>
  //         </div>
  //         <div style={{border: "solid 1px black"}}>
  //             <div className="d-flex">
  //                 <div className="flex-shrink-0">
  //                     <img src={logo} className="App-logo" alt="logo" style={{height:"50px", width:"50px"}} />
  //                 </div>
  //                 <div className="flex-grow-1 ms-3">
  //                     <div>This is some content from a media component.</div>
  //                     <div>You can replace this with any content and adjust it as needed.</div>
  //                 </div>
  //             </div>
  //         </div>
  //         <div style={{border: "solid 1px black"}}>
  //             <div className="d-flex align-items-center">
  //                 <div className="flex-shrink-0">
  //                     <img src={logo} className="App-logo" alt="logo" style={{height:"50px", width:"50px"}} />
  //                 </div>
  //                 <div className="flex-grow-1 ms-3">
  //                     <div>This is some content from a media component.</div>
  //                     <div>You can replace this with any content and adjust it as needed.</div>
  //                 </div>
  //             </div>
  //         </div>
  //
  //         <div>
  //             <div className="radius-test">
  //                 a
  //                 <br/>
  //                 b
  //                 <br/>
  //                 c
  //             </div>
  //             <div style={{background: "red"}}>
  //                 <div style={{borderRadius: "10px",  border: "1px black solid", overflow: "hidden", background: "red"}}>
  //                     <div style={{backgroundColor:"#EEEEEE"}}>
  //                         a
  //                         <br/>
  //                         b
  //                         <br/>
  //                         c
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // );

    return (
        <Table />
    )
}


const Test1 = ({ text }) => {
    return (<td>1.{text}</td>)
}
const Test2 = ({ text }) => {
    return (<td>2.{text}</td>)
}
const Test3 = ({ text }) => {
    return (<td>3.{text}</td>)
}

const TABLE_COLUMNS = {
    test: [Test1, Test2, Test3]
}


const Table = () => {
    const [Td1,Td2,Td3] = TABLE_COLUMNS['test'];

    return (
        <table>
            <thead>
            <tr>
                <th>test1</th>
                <th>test2</th>
                <th>test3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <Td1 text="td1 td1" />
                <Td2 text="td2 td2" />
                <Td3 text="td3 td3" />
            </tr>
            <tr>
                <td>td1</td>
                <td>td2</td>
                <td>td3</td>
            </tr>
            <tr>
                <td>td1</td>
                <td>td2</td>
                <td>td3</td>
            </tr>
            </tbody>
        </table>
    )
}

export default App;
