import '../style/buttons.css';
import saveFile from '../scripts/download';


function Loginbutton() {

    function onLogin() {
        const email = document.getElementById('txtemail');
        const password = document.getElementById('txtpw');

        console.log(email.value);
        console.log(password.value);

        fetch('http://localhost:4000', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email.value,
                password: password.value,
            })
        })
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }

    return(
        <button className="LoginButton" onClick={onLogin}>Log In</button>
    )
}

export default Loginbutton;