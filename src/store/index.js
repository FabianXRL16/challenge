import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import { PUBLIC_KEY, SECRET_KEY } from '../marvel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    isLoading: false,
    limit: 20,
    page: 1,
    characterUpgradeType: true, //true is new Character and false es edit Character
    selectedIdCharacter: null,
    posOfSelectedCharacter: null
  },
  getters: {
    getCharacteres: (state) => state.characters,
  },
  actions: {
    getCharacters: ({ commit }, name) => commit('GET_CHARACTERS', name),
    nextPage: ({ commit }) => commit('NEXT_PAGE'),
    addCharacter: ({ commit }, newData) => commit('ADD_CHARACTER', newData),
    characterUpgradeType: ({ commit }, config) =>
    commit('UPGRADE_TYPE', config),
    editCharacter: ({ commit }, newData) => commit('EDIT_CHARACTER', newData),
    getSearchCharacterByName: ({ commit }, name) =>
    commit('GET_SEARCH_CHARACTER', name),
    resetCharacters: ({ commit }) => commit('RESET_CHARACTERS'),
    getSelectedIdCharacter: ({ commit }, id) => commit('GET_SELECTED_ID_CHARACTER', id),
  },
  mutations: {
    GET_CHARACTERS(state) {
      state.isLoading = true
      const URL = 'https://gateway.marvel.com:443/v1/public/characters'
      axios
        .get(
          `${URL}?ts=1&apikey=${SECRET_KEY}&hash=${PUBLIC_KEY}&limit=${
            state.limit
          }&offset=${state.limit * state.page}
          `
        )

        .then((resp) => {
          resp.data.data.results.forEach((character) => {
            state.characters.push({
              name: character.name,
              description: character.description,
              url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
              date: character.modified,
              id: character.id,
            })
          })
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          state.isLoading = false
        })
    },
    NEXT_PAGE(state) {
      state.page++
    },
    ADD_CHARACTER(state, newData) {
      if (!state.characters.some((i) => i.name === newData.name)) {
        state.characters.unshift(newData)
      }
    },
    GET_SELECTED_ID_CHARACTER(state, id) {
      let pos = state.characters.findIndex(i => i.id === id)
      state.posOfSelectedCharacter = pos
    },
    UPGRADE_TYPE(state, config) {
      state.characterUpgradeType = config
    },
    EDIT_CHARACTER(state, newData) {
      if (!state.characters.some((i) => i.name === newData.name)) {
        state.characters[state.posOfSelectedCharacter] = newData
      }
      state.characters.push({});
      state.characters.pop();
    },
    GET_SEARCH_CHARACTER(state, name) {
      state.isLoading = true
      const URL = 'https://gateway.marvel.com:443/v1/public/characters'
      axios
        .get(
          `${URL}?ts=1&apikey=${SECRET_KEY}&hash=${PUBLIC_KEY}&limit=${
            state.limit
          }&offset=${state.limit * state.page}&nameStartsWith=${name}
          `
        )

        .then((resp) => {
          resp.data.data.results.forEach((character) => {
            state.characters.push({
              name: character.name,
              description: character.description,
              url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
              date: character.modified,
              id: character.id,
            })
          })
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          state.isLoading = false
        })
    },
    RESET_CHARACTERS(state) {
      state.characters.splice(0, state.characters.length)
    },
  },
  modules: {},
})
