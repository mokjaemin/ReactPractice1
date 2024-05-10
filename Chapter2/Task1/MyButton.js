function MyButton(pros){
    const [isClicked, setIsClicked] = React.useState(false);
    return React.createElement(
        'button',
        {onClick : () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
}
// root라는 id를 가진 DOM container 생성 후 MyButton 렌더링
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));