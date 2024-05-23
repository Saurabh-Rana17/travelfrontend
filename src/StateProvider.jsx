import { createContext, useEffect, useReducer } from "react";
import { json } from "react-router-dom";

const defaultState = {
  tours: [],
  packages: [],
  hotels: [],
  total: 0,
};

function getInitialState() {
  const init = JSON.parse(localStorage.getItem("cart")) || defaultState;
  return init;
}

export const CartContext = createContext({
  cartState: defaultState,
  addTour: () => {},
  deleteTour: () => {},
  addPackage: () => {},
  deletePackage: () => {},
  addHotel: () => {},
});

function cartReducer(state, action) {
  const type = action.type;

  switch (type) {
    case "addTour": {
      const { id, name } = action.payload;

      const newTours = [...state.tours, { id, name }];
      const total = state.total + 1;
      const newState = {
        ...state,
        tours: newTours,
        total,
      };

      return newState;
    }

    case "deleteTour": {
      const id = action.payload;
      const newTours = state.tours.filter((el) => el.id !== id);
      const total = state.total - 1;
      console.log(newTours);
      const newState = {
        ...state,
        tours: newTours,
        total,
      };
      return newState;
    }

    case "addPackage": {
      const { id, name } = action.payload;
      const total = state.total + 1;
      const newPackages = [...state.packages, { id, name }];
      const newState = {
        ...state,
        total,
        packages: newPackages,
      };

      return newState;
    }

    case "deletePackage": {
      const id = action.payload;
      const total = state.total - 1;
      const newPackages = state.packages.filter((el) => el.id !== id);
      const newState = {
        ...state,
        total,
        packages: newPackages,
      };
      return newState;
    }

    case "addHotel": {
      const { id, name, price } = action.payload;
      const total = state.total + 1;
      const newHotels = [...state.hotels, { id, name, price }];
      const newState = {
        ...state,
        total,
        hotels: newHotels,
      };

      return newState;
    }

    default:
      return state;
  }
}

function StateProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  function addTour(id, name) {
    dispatch({
      type: "addTour",
      payload: { id, name },
    });
  }

  function deleteTour(id) {
    dispatch({
      type: "deleteTour",
      payload: id,
    });
  }

  function addPackage(id, name) {
    dispatch({
      type: "addPackage",
      payload: { id, name },
    });
  }

  function deletePackage(id) {
    dispatch({
      type: "deletePackage",
      payload: id,
    });
  }

  function addHotel(id, name, price) {
    dispatch({
      type: "addHotel",
      payload: {
        id,
        name,
        price,
      },
    });
  }

  const value = {
    cartState,
    addTour,
    deleteTour,
    addPackage,
    deletePackage,
    addHotel,
  };
  console.log(cartState);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default StateProvider;
