import React from 'react';
import { Link } from 'react-router-dom';
import Pagedefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <Pagedefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type="text" />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="">
        Ir para Home
      </Link>
    </Pagedefault>
  )
}

export default CadastroCategoria;
