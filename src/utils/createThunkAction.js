export const createThunkAction = (callback) =>{
    return (...rest) => {
        return async (dispatch) => {
          try {
            callback(...rest, dispatch)
            data?.succes()
          } catch (err) {
            data?.error(err);
          } finally {
            data?.finally();
          }
        };
    }
}