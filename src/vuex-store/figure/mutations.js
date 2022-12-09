export default{
    setFigures(state, payload){
        state.figures = payload;
    },
    insertFigure(state, payload){
        state.figures.push(payload);
    }
}