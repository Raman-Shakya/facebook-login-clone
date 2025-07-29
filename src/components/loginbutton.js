import '../style/buttons.css';
import saveFile from '../scripts/download';


function Loginbutton() {

    function onLogin() {
        const email = document.getElementById('txtemail');
        const password = document.getElementById('txtpw');

        console.log(email.value);
        console.log(password.value);

        fetch('http://10.0.115.55:4000', {
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
        <a className="LoginButton" onClick={onLogin} href='./home?auth=239012930820980'>Log In</a>
    )
}

export default Loginbutton;