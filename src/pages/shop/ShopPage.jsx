import React, { Component } from "react";
import { Route } from "react-router";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase-utils";
import Collection from "../collection/collection";

class ShopPage extends Component {
  unsuscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot);
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

export default ShopPage;
