import AppConstants from '../constants/app-constants';
import {dispatch, register} from '../dispatchers/app-dispatcher';

export default(){
  memberInsert(item){
    dispatch({
      actionType: AppConstants.MEMBER_INSERT, item
    })
  },
  memberLogin(item){
    dispatch({
      actionType: AppConstants.MEMBER_LOGIN, item
    })
  },
  memberList(item){
    dispatch({
      actionType: AppConstants.MEMBER_LIST, item
    })
  },
  memberGet(item){
    dispatch({
      actionType: AppConstants.MEMBER_GET, item
    })
  },
  vehicleInsert(item){
    dispatch({
      actionType: AppConstants.VEHICLE_INSERT, item
    })
  },
  vehicleCheckNum(item){
    dispatch({
      actionType: AppConstants.VEHICLE_CHECK_NUM, item
    })
  },
  vehicleDelete(item){
    dispatch({
      actionType: AppConstants.VEHICLE_DELETE, item
    })
  },
  statusTypeList(item){
    dispatch({
      actionType: AppConstants.STATUS_TYPELIST, item
    })
  },
  statusSortList(item){
    dispatch({
      actionType: AppConstants.STATUS_SORTLIST, item
    })
  },
  statusMileageList(item){
    dispatch({
      actionType: AppConstants.STATUS_MILEAGELIST, item
    })
  },
  statusMileageInsert(item){
    dispatch({
      actionType: AppConstants.STATUS_MILEAGEINSERT, item
    })
  },
  statusAccountInsert(item){
    dispatch({
      actionType: AppConstants.STATUS_ACCOUNTINSERT, item
    })
  },
  statusAccountList(item){
    dispatch({
      actionType: AppConstants.STATUS_ACCOUNTLIST, item
    })
  },
  memberEfficiencyInsert(item){
    dispatch({
      actionType: AppConstants.MEMBER_EFFICIENCYINSERT, item
    })
  },
  memberEfficiencyGet(item){
    dispatch({
      actionType: AppConstants.MEMBER_EFFICIENCYGET, item
    })
  }
}
