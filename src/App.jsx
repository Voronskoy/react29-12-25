import Heading1 from "./components/Heading1/Heading1";
import Quote from "./components/Quote/Quote";

function App() {
  return (
    <>
      <Heading1 />
      <Quote text='“Найкращий спосіб почати — перестати говорити і почати робити.”' author='— Волт Дісней'/>
      <Quote text='“Не помиляється лише той, хто нічого не робить.”' author='— Теодор Рузвельт'/>
      <Quote text='“Успіх — це рух від невдачі до невдачі без втрати ентузіазму.”' author='— Вінстон Черчилль'/>
    </>
  );
}

export default App;
