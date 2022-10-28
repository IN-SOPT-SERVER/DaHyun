const data = require('../data/data.json');
require('dotenv').config();

const getSeriesData = async(seriesId : string) => {
    if (!data[seriesId]) return null;      //JSON.parse는 undefined 사용 못한대서
    return data[seriesId];
} 

const postEvaluateData = async(seriesId : string, evalNum : number) => {

    data[seriesId].userInfo.evalNum = evalNum;
    return data[seriesId];
    
}

const postMyListData = async(seriesId: string) => {

    data[seriesId].userInfo.toMyList = true;
    return data[seriesId];
}

const deleteMyListData = async(seriesId: string) => {

    data[seriesId].userInfo.toMyList = false;
    return data[seriesId];
}

export {
    getSeriesData,
    postEvaluateData,
    postMyListData,
    deleteMyListData,
}