import React, { Component } from "react";
import { connect } from "react-redux";
import Field from "./Field";
import PropTypes from "prop-types";
import { getFields } from "../../actions/fieldActions";

class FieldList extends Component {
  componentDidMount() {
    this.props.getFields();
  }
  render() {
    const { fields } = this.props;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          minWidth: "320px"
        }}
      >
        <React.Fragment>
          {fields.map((field, index) => {
            return <Field key={index} id={field.id} name={field.name} />;
          })}
        </React.Fragment>
      </div>
    );
  }
}

FieldList.propTypes = {
  fields: PropTypes.array.isRequired,
  getFields: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  fields: state.field.fields
});

export default connect(
  mapStateToProps,
  { getFields }
)(FieldList);
