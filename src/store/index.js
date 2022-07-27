import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";

import { PUBLIC_KEY, SECRET_KEY } from "../marvel";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    isLoading: false,
    limit: 20,
    page: 1,
    characterUpgradeType: true,
  },
  getters: {
    getCharacteres: (state) => state.characters,
  },
  actions: {
    getCharacters: ({ commit }) => commit("GET_CHARACTERS"),
    nextPage: ({ commit }) => commit("NEXT_PAGE"),
    addCharacter: ({ commit }, newData) => commit("ADD_CHARACTER", newData),
    characterUpgradeType: ({ commit }, config) => commit("UPGRADE_TYPE", config),
  },
  mutations: {
    GET_CHARACTERS(state) {
      state.isLoading = true;
      const URL = "https://gateway.marvel.com:443/v1/public/characters";
      axios
        .get(
          `${URL}?ts=1&apikey=${SECRET_KEY}&hash=${PUBLIC_KEY}&limit=${
            state.limit
          }&offset=${state.limit * state.page}
          `)
          
        .then((resp) => {
          resp.data.data.results.forEach((character) => {
            state.characters.push({
              name: character.name,
              description: character.description,
              url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
              date: character.modified,
              id: character.id,
            });
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(()=> {
          state.isLoading = false;
        });
    },
    NEXT_PAGE(state) {
      state.page++;
    },
    ADD_CHARACTER(state, newData) {
      if (!state.characters.some((i) => i.name === newData.name)) {
        state.characters.unshift(newData);
      }
    },
    UPGRADE_TYPE(state, config) {
      state.characterUpgradeType = config;
    }
  },
  modules: {
  }
})
