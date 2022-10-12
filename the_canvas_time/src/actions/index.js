export const GET_DATA_LIFE_STYLE = 'GET_DATA_LIFE_STYLE';

export const actSelectDarkMode = (data) => {
  return {
    type: 'GET_DARK_MODE',
    data,
  };
};

export const actLifeStyle = (data) =>{
  return{
    type:GET_DATA_LIFE_STYLE,
    data,
  }
}
