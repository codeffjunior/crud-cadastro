import React from 'react'

function Modal() {
  return (
    <div>
      <header>
        <h2>Novo Trabalhador</h2>
      </header>
      <form>
        <input type="text" placeholder='Registro' />
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Cargo' />
        <input type="text" placeholder='Admissão' />
      </form>
    </div>
  )
}

export default Modal