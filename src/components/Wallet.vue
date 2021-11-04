<template>
  <div id="wallet">
    <p>Connect your Wallet</p>
    <div class="col-1 m-auto" id="wallet">
      <button class="btn btn-success" v-on:click="WalletConnect()">
        <fa icon="wallet" /> Wallet
      </button>
    </div>
    <div class="img-fluid max-width: 50%" alt="Responsive image" id="wallet">
      <table class="table">
        <tbody>
          <tr>
            <td>
              <img
                class="img-fluid img-thumbnail"
                src="../assets/AlgoInclusionNft.jpg"
                alt="Ballon NFT"
              />
            </td>
            <td>
              <div v-if="addr">
                <p id="addr">{{ addr }}</p>
                <p id="bal">{{ bal }} ALGO Available</p>

                <div id="transaction">
                  <button class="btn btn-info" v-on:click="BuyNFT()">
                    <fa icon="shopping-cart" /> Buy NFT
                  </button>
                  <p>(Loading... please wait, TestNet)</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addr", "bal", "faucetLoading"],
  methods: {
    BuyNFT: function () {
      this.$emit("BuyNFT");
    },
    WalletConnect: function () {
      console.log("conn");
      this.$emit("WalletConnect");
    },
  },
};
</script>

<style scoped>
#wallet {
  margin-top: 0.5vh;
  margin-bottom: 5vh;
  text-align: center;
}
#transaction-loading {
  opacity: 0;
  transition: 1s;
}
#transaction-loading.loading {
  opacity: 100;
  transition: 1s;
}
.row {
  display: flex;
  flex-direction: row;
}
.label {
  margin-left: 0.5vw;
}
.with-hover-label .label {
  opacity: 0;
  transition: 1s;
}
.with-hover-label:hover > .label {
  opacity: 100;
  transition: 1s;
}
p {
  margin-top: 1.5vh;
  margin-bottom: 5vh;
  align-self: center;
}
.subtext {
  font-size: 1vw;
}
#wallet-icon {
  max-height: 10vh;
  width: auto;
  display: block;
}
#transaction-icon {
  max-height: 7vh;
  left: 2vw;
  width: auto;
}
#addr {
  font-size: 0.5vw;
}
#bal {
  font-size: 2vw;
}
</style>
