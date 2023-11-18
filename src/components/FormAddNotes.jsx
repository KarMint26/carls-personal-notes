import React, { Component } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default class FormAddNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      countChar: 50,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNotes(this.state.title, this.state.body);
    this.props.handleModal();
  }

  render() {
    const { handleModal } = this.props;

    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit} className="form">
          <IoCloseSharp className="close-btn" onClick={handleModal} />
          <div className="title-form">Create Notes</div>
          <div className="input-field">
            <div className="char">
              Remaining characters : {this.state.countChar}
            </div>
            <input
              placeholder="This is the title ..."
              maxLength={50}
              type="text"
              name="title"
              className="title"
              autoComplete="off"
              onChange={({ target }) => {
                const value = target.value;
                const newCountChar = 50 - value.length;

                if (newCountChar >= 0) {
                  this.setState({
                    title: value,
                    countChar: newCountChar,
                  });
                }
              }}
              value={this.state.title}
              required
            />
          </div>
          <div className="input-field">
            <textarea
              name="notes"
              className="notes-desc"
              cols="30"
              rows="10"
              placeholder="Write your notes here ..."
              onChange={({ target }) =>
                this.setState({
                  body: target.value,
                })
              }
              value={this.state.body}
              required
            ></textarea>
          </div>
          <button type="submit">
            <MdCreateNewFolder />
            Create
          </button>
        </form>
      </div>
    );
  }
}
