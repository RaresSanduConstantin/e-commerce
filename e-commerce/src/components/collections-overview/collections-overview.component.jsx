import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import PreviewCollection from "../preview-collection/preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
