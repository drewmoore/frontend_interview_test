import { connect }       from 'react-redux';
import missingImage      from '../../images/missingImage.svg';
import AdvertisementItem from '../../components/advertisements/Item';

const mapStateToProps = (state, ownProps) => {
  // Determine the best image to serve as the title image or banner for the advertisement.
  let banner;
  const titlePicture = Object.values(ownProps.advertisementAssets)
    .filter(asset => asset.titlePicture)[0]
  if (!!titlePicture) {
    banner = titlePicture.advertisementThumbnails.inventory_m.url;
  } else {
    banner = missingImage;
  }
  return {
    banner,
    // Determine whether the property is for sale or for lease.
    // I was not entirely certain on the criteria for these, so I guessed.
    purpose:       ownProps.purpose > 0 ? 'Kaufen' : 'Mieten',
    postalCode:    ownProps.realestateSummary.address.postalCode,
    city:          ownProps.realestateSummary.address.city,
    price:         `${ownProps.advertisementPrice.sellPrice} €`,
    numberOfRooms: ownProps.realestateSummary.numberOfRooms,
    space:         Math.floor(ownProps.realestateSummary.space)
  };
}

const AdvertisementItemContainer = connect(mapStateToProps)(AdvertisementItem);

export default AdvertisementItemContainer;
