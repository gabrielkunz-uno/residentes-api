import { useState } from "react"
import Request from "../../request"

function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [registration_id, setRegistrationId] = useState("");
    const [initial_date, setInitialDate] = useState("");
    const [final_date, setFinalDate] = useState("");
    const [res_id, setResId] = useState("");

    function handleRegister () {
        fetch('http://127.0.0.1:3001/api/v1/residents',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                whatsapp: whatsapp,
                registration_id: registration_id,
                initial_date: initial_date,
                final_date: final_date
            })
        })
        .then((res) => res.json())
        .then((res) => { 
            setResId(res.id)
            return fetch('http://127.0.0.1:3001/register',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                user:{
                    email: email,
                    password: password,
                    resident_id: res.id
                }})
                })})
            .then((res) => res.json().then(data => ({status: res.status, body: data})))
            .then((data) => {
                if (!(data.status === 200)) {
                    Request.deleteRes("request", res_id)                
                }
                else {
                    localStorage.setItem("token", data.token)
                    setUser(data.user)
                    window.location.replace("map")
                }
            })
    };

    return(
        <div className="card-body container d-flex justify-content-center text-center align-items-center">
            <div className="card mt-5 w-50 mb-5 bg-body rounded ">
                <div className="card-body bg-dark rounded">
                    <form>
                        <h1 className="h1 mb-3 text-white fw-normal">Cadastro</h1>
                        <div className="form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="text"
                                className="form-control  " 
                                id="register_name" 
                                value={name} 
                                onChange={e => setName(e.target.value)}
                                placeholder="Nome Completo"/>
                            <label htmlFor="register_name">NOME</label>
                        </div>
                        <div className="form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="email"
                                className="form-control " 
                                id="register_email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                placeholder="name@example.com"/>
                            <label htmlFor="register_email">EMAIL</label>
                        </div>
                        <div className="align-items-center form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="password" 
                                className="form-control " 
                                id="register_password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                placeholder="password"/>
                            <label htmlFor="register_password">SENHA</label>
                        </div>
                        <div className="form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="tel"
                                className="form-control  " 
                                id="register_whatsapp" 
                                value={whatsapp} 
                                onChange={e => setWhatsapp(e.target.value)}
                                placeholder="(12) 1234-1234"/>
                            <label htmlFor="register_whatsapp">WHATSAPP</label>
                        </div>
                        <div className="form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="number"
                                className="form-control  " 
                                id="register_registration_id" 
                                value={registration_id} 
                                onChange={e => setRegistrationId(e.target.value)}
                                placeholder="123412123"/>
                            <label htmlFor="register_registration_id">MATRÍCULA</label>
                        </div>
                        <div className="form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="date"
                                className="form-control  " 
                                id="register_initial_date" 
                                value={initial_date} 
                                onChange={e => setInitialDate(e.target.value)}/>
                            <label htmlFor="register_initial_date">DATA INICIAL</label>
                        </div>
                        <div className="form-floating mb-3 col-md-6 w-100">
                            <input 
                                type="date"
                                className="form-control  " 
                                id="register_final_date" 
                                value={final_date} 
                                onChange={e => setFinalDate(e.target.value)}/>
                            <label htmlFor="register_final_date">DATA FINAL</label>
                        </div>
                        <button
                            type="button" 
                            onClick={handleRegister} 
                            className="btn btn-lg btn-light text-dark mt-3 mb-3 col-md-6"
                        >ENTRAR</button><br/>
                        <a href="/login" className="text-white">Possui Conta?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
