import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
          <div>
              test
              test
              test
          </div>
          <div className="d-flex">
              <div className="p-2 flex-fill item">Flex item with a lot of content</div>
              <div className="p-2 flex-fill item">Flex item</div>
              <div className="p-2 flex-fill item">Flex item</div>
          </div>
          <div className="d-flex">
              <div className="p-2 flex-fill item">Flex item with a lot of content</div>
              <div className="p-2 flex-fill item">
                  <div>test</div>
                  <div>test</div>
                  <div>test</div>
              </div>
              <div className="p-2 flex-fill item">Flex item</div>
          </div>
          <div className="d-flex">
              <div className="p-2 flex-grow-1 item">Flex item with a lot of content</div>
              <div className="p-2 item">Flex item</div>
          </div>
          <div style={{border: "solid 1px black"}}>
              <div className="d-flex">
                  <div className="flex-shrink-0">
                      <img src={logo} className="App-logo" alt="logo" style={{height:"50px", width:"50px"}} />
                  </div>
                  <div className="flex-grow-1 ms-3">
                      <div>This is some content from a media component.</div>
                      <div>You can replace this with any content and adjust it as needed.</div>
                  </div>
              </div>
          </div>
          <div style={{border: "solid 1px black"}}>
              <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                      <img src={logo} className="App-logo" alt="logo" style={{height:"50px", width:"50px"}} />
                  </div>
                  <div className="flex-grow-1 ms-3">
                      <div>This is some content from a media component.</div>
                      <div>You can replace this with any content and adjust it as needed.</div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
