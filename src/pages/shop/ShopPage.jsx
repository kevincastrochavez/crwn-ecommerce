import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase-utils";
import Collection from "../collection/collection";
import { updateCollections } from "../../redux/shop/shopActions";

class ShopPage extends Component {
  unsuscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
