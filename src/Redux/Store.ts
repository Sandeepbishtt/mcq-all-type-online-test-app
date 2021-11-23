import {configureStore} from '@reduxjs/toolkit'
import OnlineMcqSlice from './Slice'
export default configureStore({
	reducer:{
		data:OnlineMcqSlice
	}
})