import { connect }           from 'react-redux';
import AdvertisementsActions from '../../actions/advertisements';
import AdvertisementsList    from '../../components/advertisements/List';

const mapStateToProps = state => ({
  advertisements: Object.values(state.advertisements.items),
  isFetching:     state.advertisements.isFetching,
  error:          state.advertisements.error
});

const mapDispatchToProps = dispatch => ({
  fetchAdvertisements() {
    dispatch(AdvertisementsActions.fetch());
  }
});

const AdvertisementsListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(AdvertisementsList);

export default AdvertisementsListContainer;
