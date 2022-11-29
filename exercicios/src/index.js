import React from 'react';
import ReactDOM from 'react-dom/client';
import Daddy from './component/Daddy';

import Saudation from './component/Saudation';
import Son from './component/Son';


ReactDOM.render(<div><Daddy name="Paulin" lastname="Josias">
<Son name="Xuxa"  lastname="Anã" /> 
<Son name="Faustão"  lastname="butijão" /> 
<Son name="Ednaldo"  lastname="Pereira" /> 
</Daddy>
</div>, document.getElementById('root'))
