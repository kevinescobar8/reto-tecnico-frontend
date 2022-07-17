import { Component, ChangeEvent } from "react";
import NaveDataService from './dataNave';
import INaveInput from './nave-input';
type Props = {};
type State = INaveInput & {
  submitted: boolean
};
export default class AddNave extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeFuel = this.onChangeFuel.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeLoad = this.onChangeLoad.bind(this);
    this.onChangeQuest = this.onChangeQuest.bind(this);
    this.onChangePassengers = this.onChangePassengers.bind(this);
    this.onChangePotency = this.onChangePotency.bind(this);
    this.saveNave = this.saveNave.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.state = {
        nombre: "",
        combustible:"",
        peso: 0,
        altura: 0,
        capacidad:  0,
        objetivo: "",
        personas:  0,
        potencia:  0,
        submitted: false
    };
  }
  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeFuel(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        combustible: e.target.value
    });
  }
  onChangeWeight(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        peso: e.target.valueAsNumber
    });
  }
  onChangeHeight(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        altura: e.target.valueAsNumber
    });
  }
  onChangeLoad(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        capacidad: e.target.valueAsNumber
    });
  }
  onChangeQuest(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        objetivo: e.target.value
    });
  }
  onChangePassengers(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        personas: e.target.valueAsNumber
    });
  }
  onChangePotency(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
        potencia: e.target.valueAsNumber
    });
  }
  saveNave() {
    const data: INaveInput = {
        nombre: this.state.nombre,
        combustible: this.state.combustible,
        peso: this.state.peso,
        altura: this.state.altura,
        capacidad:  this.state.capacidad,
        objetivo: this.state.objetivo,
        personas:  this.state.personas,
        potencia:  this.state.potencia
    };
    NaveDataService.create(data)
      .then((response: any) => {
        this.setState({
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  newTutorial() {
    this.setState({
        nombre: "",
        combustible:"",
        peso: 0,
        altura: 0,
        capacidad:  0,
        objetivo: "",
        personas:  0,
        potencia:  0,
        submitted: false
    });
  }
  render() {
    const { submitted, nombre, combustible, peso, altura, capacidad, objetivo, personas, potencia } = this.state;
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                required
                value={nombre}
                onChange={this.onChangeName}
                name="nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="combustible">Combustible</label>
              <input
                type="text"
                className="form-control"
                id="combustible"
                required
                value={combustible}
                onChange={this.onChangeFuel}
                name="combustible"
              />
            </div>
            <div className="form-group">
              <label htmlFor="peso">Peso</label>
              <input
                type="number"
                className="form-control"
                id="peso"
                required
                value={peso}
                onChange={this.onChangeWeight}
                name="peso"
              />
            </div>
            <div className="form-group">
              <label htmlFor="altura">Altura</label>
              <input
                type="number"
                className="form-control"
                id="altura"
                required
                value={altura}
                onChange={this.onChangeHeight}
                name="altura"
              />
            </div>
            <div className="form-group">
              <label htmlFor="capacidad">Capacidad</label>
              <input
                type="number"
                className="form-control"
                id="capacidad"
                required
                value={capacidad}
                onChange={this.onChangeLoad}
                name="capacidad"
              />
            </div>
            <div className="form-group">
              <label htmlFor="objetivo">Objetivo</label>
              <input
                type="text"
                className="form-control"
                id="objetivo"
                required
                value={objetivo}
                onChange={this.onChangeQuest}
                name="objetivo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="personas">Personas</label>
              <input
                type="number"
                className="form-control"
                id="personas"
                required
                value={personas}
                onChange={this.onChangePassengers}
                name="personas"
              />
            </div>
            <div className="form-group">
              <label htmlFor="potencia">Potencia</label>
              <input
                type="number"
                className="form-control"
                id="potencia"
                required
                value={potencia}
                onChange={this.onChangePotency}
                name="potencia"
              />
            </div>
            <button onClick={this.saveNave} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}