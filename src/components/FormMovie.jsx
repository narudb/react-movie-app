import React from "react";
import axios from "axios";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();

    const url = "https://post-a-form.herokuapp.com/api/movies/";

    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} Merci!`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>Ajouter un film</h1>

        <form onSubmit={this.submitForm}>
          <div className="form-data">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Titre du film"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <div className="form-data">
            <input
              type="text"
              id="poster"
              name="poster"
              placeholder="Poster du film"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>

          <div className="form-data">
            <textarea
              type="text"
              id="comment"
              name="comment"
              placeholder="Commentaires..."
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormMovie;
