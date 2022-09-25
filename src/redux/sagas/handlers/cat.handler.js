import { call, put } from "redux-saga/effects";
import { getCatsFailure, getCatsSuccess } from "../../slices/catSlice";
import { requestGetCats } from "../requests/cat.request";

export function* handleGetCats() {
    try {
        const response = yield call(requestGetCats)
        const firstTenItems = response.data.slice(0, 10);
        yield put(getCatsSuccess(firstTenItems))
    } catch (err) {
        console.log(err)
        yield put(getCatsFailure(`error source: handleGetCats -> message: ${err.toString()}`))
        // throw new Error(err)
    }
}