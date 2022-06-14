
import Header from "./Header";
import NavBar from "./NavBar";
import Marketing from './Marketing';

const layoutStyle = {
  display: "flex",
  flexDirection: 'row',
  height: "430px",
  width: "1000px",
  left: '50%', 
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  borderRadius: '8px',
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  height: '100%',
  borderRadius: '8px',
  backgroundColor: 'sienna',
};

const layoutChildren = {
  width: '100%',
  height: '100%',
  paddingRight: '15px',
  borderRadius: '8px',
}

export default function Layout(props) {
  return (
    <>
        <div className="Layout-container" style={layoutStyle}>
            <div className="Layout-children" style={layoutChildren}>
                {/* <Header /> */}
                <div className="Content" style={contentStyle}>
                    {props.children}
                </div>
                {/* <NavBar /> */}
            </div>
            <Marketing/>
        </div>
    </>
  )
}