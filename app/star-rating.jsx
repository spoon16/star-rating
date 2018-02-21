class StarRating extends React.Component {
  constructor(props) {
     super(props);
     this.state = {};
  }

  onChange(rating) {
     this.setState({ rating });
     console.log('onChange', { name: this.props.name, rating });
  }

  render() {
     const { name } = this.props;
     return (
        <fieldset className="star-rating">
           <Star id={name + "_5"} name={name} value={5} checked={this.state.rating == 5} onChange={e => this.onChange(e)} />
           <Star id={name + "_4"} name={name} value={4} checked={this.state.rating == 4} onChange={e => this.onChange(e)} />
           <Star id={name + "_3"} name={name} value={3} checked={this.state.rating == 3} onChange={e => this.onChange(e)} />
           <Star id={name + "_2"} name={name} value={2} checked={this.state.rating == 2} onChange={e => this.onChange(e)} />
           <Star id={name + "_1"} name={name} value={1} checked={this.state.rating == 1} onChange={e => this.onChange(e)} />
        </fieldset>
     );
  }
}

class Star extends React.Component {
  constructor(props) {
     super(props);
  }

  onChange(e) {
     const rating = parseInt(e.target.value);
     this.props.onChange(rating);
  }

  render() {
     const {
        id,
        name,
        value,
        checked,
     } = this.props;

     return [
        (<input key={id + "__input"} className="star-rating__input" type="radio" id={id} name={name} value={value} checked={checked} onChange={e => this.onChange(e)}></input>),
        (<label key={id + "__label"} className={this.props.checked ? "star-rating__clicked" : "star-rating__label"} htmlFor={id}></label>),
     ];
  }
}

ReactDOM.render(
  [
     (<h1 key="twin-peaks__h1">Twin Peaks</h1>),
     (<StarRating key="twin-peaks__star-rating" name="twin-peaks" />),
     (<h1 key="veronica-mars__h1">Veronica Mars</h1>),
     (<StarRating  key="veronica-mars__star-rating" name="veronica-mars" />),
  ],
  document.getElementById('app')
 );
