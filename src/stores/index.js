import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import Crypto from "crypto-js";
import Cookie from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import wizard from "./modules/wizard";

// Store the encryption token in a secure cookie.
const storageKey = "c#^ewqihewjkqhkjehwjqkhekq";
const encryptionToken = Cookie.get(storageKey) || uuidv4();
Cookie.set(storageKey, encryptionToken, { secure: true, expires: 180 });

const vuexLocal = new VuexPersistence({
  storage: {
    getItem: () => {
      // Get the store from local storage.
      const store = window.localStorage.getItem(storageKey);
      if (store) {
        try {
          // Decrypt the store retrieved from local storage
          // using our encryption token stored in cookies.
          const bytes = Crypto.AES.decrypt(store, encryptionToken);
          return JSON.parse(bytes.toString(Crypto.enc.Utf8));
        } catch (e) {
          // The store will be reset if decryption fails.
          window.localStorage.removeItem(storageKey);
        }
      }

      return null;
    },
    setItem: (key, value) => {
      const storeValue = Crypto.AES.encrypt(value, encryptionToken).toString();
      return window.localStorage.setItem(storageKey, storeValue);
    },
    removeItem: () => window.localStorage.removeItem(storageKey),
  },
});

const store = createStore({
  modules: {
    wizard,
  },
  plugins: [vuexLocal.plugin],
  strict: true,
});

export default store;
