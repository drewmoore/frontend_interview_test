import { connect }       from 'react-redux';
import AdvertisementItem from '../../components/advertisements/Item';

const mapStateToProps = (state, ownProps) => ({
  // Determine the best image to serve as the title image or banner for the advertisement.
  banner: Object.values(ownProps.advertisementAssets)
    .filter(asset => asset.titlePicture)[0].advertisementThumbnails.inventory_m.url,
  // Determine whether the property is for sale or for lease.
  purpose:       ownProps.purpose > 0 ? 'Kaufen' : 'Mieten',
  postalCode:    ownProps.realestateSummary.address.postalCode,
  city:          ownProps.realestateSummary.address.city,
  price:         `${ownProps.advertisementPrice.sellPrice} €`,
  numberOfRooms: ownProps.realestateSummary.numberOfRooms,
  space:         Math.floor(ownProps.realestateSummary.space)
});

const AdvertisementItemContainer = connect(mapStateToProps)(AdvertisementItem);

export default AdvertisementItemContainer;
