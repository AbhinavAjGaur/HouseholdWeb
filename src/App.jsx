import ActivityLogHeader from "./component/ActivityLogHeader";
import ActivityTable from "./component/ActivityTable";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {/* You can add a main content area here if needed */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <ActivityLogHeader/>
        <ActivityTable/>
      </div>
    </div>
  );
}

export default App;
