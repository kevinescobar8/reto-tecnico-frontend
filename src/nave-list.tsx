import { Component, ChangeEvent } from "react";
import NaveDataService from './dataNave';
import INaves from './nave';

type Props = {
  searchTitle: string
 };
type State = {
  naves: Array<Object>,
  searchTitle: string
};
export default class NavesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveNaves = this.retrieveNaves.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      naves: new Array<Object>,
      searchTitle: this.props.searchTitle
    };
  }
  async componentDidMount() {
    this.retrieveNaves()
  }
  
  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    });
  }
  async retrieveNaves() {
    await NaveDataService.getAll()
      .then((response: any) => {
        this.setState({
          naves: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
      console.log(this.state.naves)
  }
  searchTitle() {
    NaveDataService.get(this.state.searchTitle)
      .then((response: any) => {
        this.setState({
          naves: response
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  render() {
    const { searchTitle, naves} = this.state;
    console.log(naves)
    if (naves.length == 0) {
      return <div>Loading....</div>
    }
    return (
      <div className="list row">
        <div className="col-md-8">
          
        </div>
        <div>
          <div>
          {JSON.stringify(naves)}
          </div>
        </div>
      </div>
    );
  }
}
