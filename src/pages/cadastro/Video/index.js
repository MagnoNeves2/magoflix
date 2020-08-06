import React from 'react';
import { Link } from 'react-router-dom';
import Pagedefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <Pagedefault>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </Pagedefault>
  )
}

export default CadastroVideo;
