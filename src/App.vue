<template>
  <div id="app" class="container mt-5">
    <img
      class="img-fluid m-auto d-block"
      src="./assets/algorandlogoblack.svg"
      alt="Algorand Logo"
    />
    <Wallet
      v-on:WalletConnect="WalletConnect"
      v-on:BuyNFT="BuyNFT"
      :addr="this.addr"
      :bal="this.bal"
      :faucetLoading="this.faucetLoading"
    />
  </div>
</template>

<script>
import Wallet from "./components/Wallet.vue";
import { loadStdlib } from "@reach-sh/stdlib";
import MyAlgoConnect from "@reach-sh/stdlib/ALGO_MyAlgoConnect";
const stdlib = loadStdlib("ALGO");

stdlib.setWalletFallback(
  stdlib.walletFallback({
    providerEnv: "TestNet",
    MyAlgoConnect,
  })
);

export default {
  name: "App",
  components: {
    Wallet,
  },
  data: () => {
    return {
      algodClient: undefined,
      acc: undefined,
      acc2: undefined,
      addr: undefined,
      balAtomic: undefined,
      bal: undefined,
      faucetLoading: false,
    };
  },
  methods: {
    async updateBalance() {
      try {
        this.balAtomic = await stdlib.balanceOf(this.acc);
        console.log(this.acc);
        this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
      } catch (err) {
        console.log(err);
      }
    },
    async WalletConnect() {
      try {
        this.acc = await stdlib.getDefaultAccount();
        this.acc2 = await stdlib.connectAccount({
          addr: "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA",
        });
        this.addr = stdlib.formatAddress(this.acc.getAddress());
        this.balAtomic = await stdlib.balanceOf(this.acc);
        this.bal = String(stdlib.formatCurrency(this.balAtomic, 4));
      } catch (err) {
        console.log(err);
      }
    },
    async BuyNFT() {
      this.faucetLoading = true;
      try {
        const algoValue = 1000000;
        await stdlib.transfer(this.acc, this.acc2, algoValue);

        this.updateBalance();
      } catch (err) {
        console.log(err);
      }
      this.faucetLoading = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 36px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17538f;
  margin-top: 2px;
}
</style>

