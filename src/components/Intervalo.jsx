import { connect } from 'react-redux'
import { Card } from './Card'
import './Intervalo.css'

import { AlterarNumbersMin, AlterarNumbersMax } from '../store/actions/numeros'

const Intervalo = (props) => {
  const { min, max, AltearMinimo, AlterarMaximo } = props
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => { AltearMinimo(+e.target.value) }}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => { AlterarMaximo(+e.target.value) }}
          />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  min: state.numeros.min,
  max: state.numeros.max
})

const mapDispatchToProps = (dispatch) => {
  return {
    AltearMinimo(novoNumero) {
      const action = AlterarNumbersMin(novoNumero)
      dispatch(action)
    },
    AlterarMaximo(novoNumero) {
      const action = AlterarNumbersMax(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervalo)