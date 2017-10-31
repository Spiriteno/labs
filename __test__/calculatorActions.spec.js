import {
  addInputs,
  subtractInputs,
  async_addInputs
} from '../src/js/actions/calculatorActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([ thunk ]);

describe('>>>A C T I O N --- Test calculatorActions', () => {
  it('+++ actionCreator addInputs', () => {
    const add = addInputs(50);
    expect(add).toEqual({ type: 'ADD_INPUTS', output: 50 });
  });

  it('+++ actionCreator subtractInputs', () => {
    const subtract = subtractInputs(-50);
    expect(subtract).toEqual({ type: 'SUBTRACT_INPUTS', output: -50 });
  });
});

describe('>>>Async action --- Test calculatorActions', () => {
  it('+++ thunk async_addInputs', async () => {
    const store = mockStore({ output: 0 });
    await store.dispatch(async_addInputs(50));
    expect(store.getActions()[0]).toEqual({ type: 'ADD_INPUTS', output: 50 });
  });
});
//*******************************************************************************************************
