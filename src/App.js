import "./index.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header>
        <h1>안녕</h1>
      </header>
      <Card number="ONE" index={5} left={45} />
      <Card number="TWO" rotate={180} index={4} left={41} delay={1} />
      <Card number="THREE" rotate={180} index={3} left={35} delay={1.5} />
      <Card number="FOUR" rotate={180} index={2} left={30} delay={2} />
      <Card number="FIVE" rotate={180} index={1} left={25} delay={2.5} />

      <footer>
        <h5>ㅏ</h5>
        <h5>ㅓ</h5>
        <h5>ㅗ</h5>
        <h5>ㅜ</h5>
        <h5>ㅡ</h5>
        <h5>ㅣ</h5>
        <h5>ㅑ</h5>
        <h5>ㅕ</h5>
        <h5>ㅛ</h5>
        <h5>ㅠ</h5>
      </footer>
    </div>
  );
}

export default App;
