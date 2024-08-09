import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h3>Sobre nós</h3>
            <p>Somos uma empresa de alta confiabilidade cuja missão é entregar ao consumidor o melhor preço possível, aliado a uma entrega eficiente e confiável. Para isso contamos com os parceiros</p>

            <p><b>SAC:</b> 0800-221-9980</p>

            <p><b>Email:</b> contato@rtech.com.br</p>
            
            <p><b>Endereço:</b> Rua São Jorge, nº 221</p>
        </div>
    )
}
