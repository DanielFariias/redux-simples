import { connect } from 'react-redux'
import { Card } from './Card'


const Sorteio = (props) => {
  const { max, min } = props
  const alaeatorio = parseInt(Math.random() * (max - min)) + min
  return (
    <Card title="Sorteio de um número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{alaeatorio}</strong>
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  min: state.numeros.min,
  max: state.numeros.max
})

export default connect(mapStateToProps)(Sorteio)