(this.webpackJsonpDBXFinance = this.webpackJsonpDBXFinance || []).push([
	[0], {
		144: function(e, n) {
			e.exports = {
				42161: {
					contracts: {
						Router: {
							address: "0xbee5c10cf6e4f68f831e11c1d9e59b43560b3642",
							abi: [{
								inputs: [{
									internalType: "address",
									name: "_factory",
									type: "address"
								}, {
									internalType: "address",
									name: "_WETH",
									type: "address"
								}],
								stateMutability: "nonpayable",
								type: "constructor"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								inputs: [],
								name: "WETH",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "tokenA",
									type: "address"
								}, {
									internalType: "address",
									name: "tokenB",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amountADesired",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountBDesired",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountAMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountBMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "addLiquidity",
								outputs: [{
									internalType: "uint256",
									name: "amountA",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountB",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "token",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amountTokenDesired",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountTokenMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETHMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "addLiquidityETH",
								outputs: [{
									internalType: "uint256",
									name: "amountToken",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETH",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}],
								stateMutability: "payable",
								type: "function"
							}, {
								inputs: [],
								name: "factory",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "reserveIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "reserveOut",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "swapFee",
									type: "uint256"
								}],
								name: "getAmountIn",
								outputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}],
								stateMutability: "pure",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "reserveIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "reserveOut",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "swapFee",
									type: "uint256"
								}],
								name: "getAmountOut",
								outputs: [{
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}],
								stateMutability: "pure",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}],
								name: "getAmountsIn",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}],
								name: "getAmountsOut",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "isOwner",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountA",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "reserveA",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "reserveB",
									type: "uint256"
								}],
								name: "quote",
								outputs: [{
									internalType: "uint256",
									name: "amountB",
									type: "uint256"
								}],
								stateMutability: "pure",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "tokenA",
									type: "address"
								}, {
									internalType: "address",
									name: "tokenB",
									type: "address"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountAMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountBMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "removeLiquidity",
								outputs: [{
									internalType: "uint256",
									name: "amountA",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountB",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "token",
									type: "address"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountTokenMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETHMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "removeLiquidityETH",
								outputs: [{
									internalType: "uint256",
									name: "amountToken",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETH",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "token",
									type: "address"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountTokenMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETHMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "removeLiquidityETHSupportingFeeOnTransferTokens",
								outputs: [{
									internalType: "uint256",
									name: "amountETH",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "token",
									type: "address"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountTokenMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETHMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}, {
									internalType: "bool",
									name: "approveMax",
									type: "bool"
								}, {
									internalType: "uint8",
									name: "v",
									type: "uint8"
								}, {
									internalType: "bytes32",
									name: "r",
									type: "bytes32"
								}, {
									internalType: "bytes32",
									name: "s",
									type: "bytes32"
								}],
								name: "removeLiquidityETHWithPermit",
								outputs: [{
									internalType: "uint256",
									name: "amountToken",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETH",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "token",
									type: "address"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountTokenMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountETHMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}, {
									internalType: "bool",
									name: "approveMax",
									type: "bool"
								}, {
									internalType: "uint8",
									name: "v",
									type: "uint8"
								}, {
									internalType: "bytes32",
									name: "r",
									type: "bytes32"
								}, {
									internalType: "bytes32",
									name: "s",
									type: "bytes32"
								}],
								name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
								outputs: [{
									internalType: "uint256",
									name: "amountETH",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "tokenA",
									type: "address"
								}, {
									internalType: "address",
									name: "tokenB",
									type: "address"
								}, {
									internalType: "uint256",
									name: "liquidity",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountAMin",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountBMin",
									type: "uint256"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}, {
									internalType: "bool",
									name: "approveMax",
									type: "bool"
								}, {
									internalType: "uint8",
									name: "v",
									type: "uint8"
								}, {
									internalType: "bytes32",
									name: "r",
									type: "bytes32"
								}, {
									internalType: "bytes32",
									name: "s",
									type: "bytes32"
								}],
								name: "removeLiquidityWithPermit",
								outputs: [{
									internalType: "uint256",
									name: "amountA",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountB",
									type: "uint256"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_swapFeeReward",
									type: "address"
								}],
								name: "setSwapFeeReward",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapETHForExactTokens",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "payable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOutMin",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapExactETHForTokens",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "payable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOutMin",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
								outputs: [],
								stateMutability: "payable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountOutMin",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapExactTokensForETH",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountOutMin",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountOutMin",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapExactTokensForTokens",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountOutMin",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "swapFeeReward",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountInMax",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapTokensForExactETH",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amountInMax",
									type: "uint256"
								}, {
									internalType: "address[]",
									name: "path",
									type: "address[]"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "deadline",
									type: "uint256"
								}],
								name: "swapTokensForExactTokens",
								outputs: [{
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								stateMutability: "payable",
								type: "receive"
							}]
						},
						Factory: {
							address: "0xaE4EC9901c3076D0DdBe76A520F9E90a6227aCB7",
							abi: [{
								inputs: [{
									internalType: "address",
									name: "_feeToSetter",
									type: "address"
								}],
								payable: !1,
								stateMutability: "nonpayable",
								type: "constructor"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "token0",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "token1",
									type: "address"
								}, {
									indexed: !1,
									internalType: "address",
									name: "pair",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "PairCreated",
								type: "event"
							}, {
								constant: !0,
								inputs: [],
								name: "INIT_CODE_HASH",
								outputs: [{
									internalType: "bytes32",
									name: "",
									type: "bytes32"
								}],
								payable: !1,
								stateMutability: "view",
								type: "function"
							}, {
								constant: !0,
								inputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "allPairs",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								payable: !1,
								stateMutability: "view",
								type: "function"
							}, {
								constant: !0,
								inputs: [],
								name: "allPairsLength",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								payable: !1,
								stateMutability: "view",
								type: "function"
							}, {
								constant: !1,
								inputs: [{
									internalType: "address",
									name: "tokenA",
									type: "address"
								}, {
									internalType: "address",
									name: "tokenB",
									type: "address"
								}],
								name: "createPair",
								outputs: [{
									internalType: "address",
									name: "pair",
									type: "address"
								}],
								payable: !1,
								stateMutability: "nonpayable",
								type: "function"
							}, {
								constant: !0,
								inputs: [],
								name: "feeTo",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								payable: !1,
								stateMutability: "view",
								type: "function"
							}, {
								constant: !0,
								inputs: [],
								name: "feeToSetter",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								payable: !1,
								stateMutability: "view",
								type: "function"
							}, {
								constant: !0,
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}, {
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "getPair",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								payable: !1,
								stateMutability: "view",
								type: "function"
							}, {
								constant: !1,
								inputs: [{
									internalType: "address",
									name: "_feeTo",
									type: "address"
								}],
								name: "setFeeTo",
								outputs: [],
								payable: !1,
								stateMutability: "nonpayable",
								type: "function"
							}, {
								constant: !1,
								inputs: [{
									internalType: "address",
									name: "_feeToSetter",
									type: "address"
								}],
								name: "setFeeToSetter",
								outputs: [],
								payable: !1,
								stateMutability: "nonpayable",
								type: "function"
							}, {
								constant: !1,
								inputs: [{
									internalType: "address",
									name: "_pair",
									type: "address"
								}, {
									internalType: "uint32",
									name: "_swapFee",
									type: "uint32"
								}],
								name: "setSwapFee",
								outputs: [],
								payable: !1,
								stateMutability: "nonpayable",
								type: "function"
							}]
						},
						MultiCall: {
							address: "0xeE4b1F9d217F42E398aC2cD954A59F209758A760",
							abi: [{
								inputs: [],
								name: "DBF",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "DBX",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "USDC",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "VDBX",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "farms",
								outputs: [{
									internalType: "contract Farms",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "farmsAdmin",
								outputs: [{
									internalType: "contract FarmsAdmin",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "getAllVaultInfo",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}, {
									components: [{
										internalType: "uint256",
										name: "poolId",
										type: "uint256"
									}, {
										components: [{
											internalType: "string",
											name: "name",
											type: "string"
										}, {
											internalType: "contract IERC20",
											name: "lpToken",
											type: "address"
										}, {
											internalType: "bool",
											name: "isLp",
											type: "bool"
										}, {
											internalType: "uint256",
											name: "allocPoint",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastTimestamp",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "accPerShare",
											type: "uint256"
										}, {
											internalType: "contract ERC721[]",
											name: "boosters",
											type: "address[]"
										}, {
											internalType: "string[]",
											name: "boostersMetaData",
											type: "string[]"
										}, {
											internalType: "uint256[]",
											name: "boostersPerc",
											type: "uint256[]"
										}],
										internalType: "struct Farms.PoolInfo",
										name: "farm",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "vaultTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardsPerSecond",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "farmTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalAllocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "multiplier",
										type: "uint256"
									}, {
										components: [{
											internalType: "string",
											name: "name",
											type: "string"
										}, {
											internalType: "contract IERC20",
											name: "lpToken",
											type: "address"
										}, {
											internalType: "bool",
											name: "isLp",
											type: "bool"
										}, {
											internalType: "uint256",
											name: "allocPoint",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastTimestamp",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "accPerShare",
											type: "uint256"
										}, {
											internalType: "contract ERC721[]",
											name: "boosters",
											type: "address[]"
										}, {
											internalType: "string[]",
											name: "boostersMetaData",
											type: "string[]"
										}, {
											internalType: "uint256[]",
											name: "boostersPerc",
											type: "uint256[]"
										}],
										internalType: "struct Farms.PoolInfo",
										name: "dbxPool",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "dbxTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "vaultMultiplier",
										type: "uint256"
									}],
									internalType: "struct MultiCall.VaultsInfo[]",
									name: "",
									type: "tuple[]"
								}, {
									components: [{
										internalType: "uint256",
										name: "poolId",
										type: "uint256"
									}, {
										components: [{
											internalType: "uint256",
											name: "amount",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "rewardDebt",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "rewards",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastStaked",
											type: "uint256"
										}],
										internalType: "struct Vault.UserInfo",
										name: "user",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "dbx",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "dbc",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "vdbx",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "bal",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "allowance",
										type: "uint256"
									}],
									internalType: "struct MultiCall.UsersInfo[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getMastermind",
								outputs: [{
									internalType: "uint256[]",
									name: "",
									type: "uint256[]"
								}, {
									components: [{
										internalType: "bool",
										name: "enabled",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "multiplier",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "period",
										type: "uint256"
									}],
									internalType: "struct Mastermind.VestingPool[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									internalType: "address",
									name: "factory",
									type: "address"
								}, {
									internalType: "uint256",
									name: "from",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "to",
									type: "uint256"
								}],
								name: "getPairs",
								outputs: [{
									components: [{
										internalType: "address",
										name: "pairAddress",
										type: "address"
									}, {
										internalType: "uint256",
										name: "reserve0",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "reserve1",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalSupply",
										type: "uint256"
									}, {
										internalType: "address",
										name: "token0",
										type: "address"
									}, {
										internalType: "address",
										name: "token1",
										type: "address"
									}, {
										internalType: "string",
										name: "token0Name",
										type: "string"
									}, {
										internalType: "string",
										name: "token1Name",
										type: "string"
									}, {
										internalType: "string",
										name: "token0Symbol",
										type: "string"
									}, {
										internalType: "string",
										name: "token1Symbol",
										type: "string"
									}, {
										internalType: "uint256",
										name: "userBal",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "token0Decimal",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "token1Decimal",
										type: "uint256"
									}],
									internalType: "struct MultiCall.PairInfo[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "poolId",
									type: "uint256"
								}],
								name: "getVaultInfo",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "poolId",
										type: "uint256"
									}, {
										components: [{
											internalType: "string",
											name: "name",
											type: "string"
										}, {
											internalType: "contract IERC20",
											name: "lpToken",
											type: "address"
										}, {
											internalType: "bool",
											name: "isLp",
											type: "bool"
										}, {
											internalType: "uint256",
											name: "allocPoint",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastTimestamp",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "accPerShare",
											type: "uint256"
										}, {
											internalType: "contract ERC721[]",
											name: "boosters",
											type: "address[]"
										}, {
											internalType: "string[]",
											name: "boostersMetaData",
											type: "string[]"
										}, {
											internalType: "uint256[]",
											name: "boostersPerc",
											type: "uint256[]"
										}],
										internalType: "struct Farms.PoolInfo",
										name: "farm",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "vaultTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardsPerSecond",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "farmTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalAllocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "multiplier",
										type: "uint256"
									}, {
										components: [{
											internalType: "string",
											name: "name",
											type: "string"
										}, {
											internalType: "contract IERC20",
											name: "lpToken",
											type: "address"
										}, {
											internalType: "bool",
											name: "isLp",
											type: "bool"
										}, {
											internalType: "uint256",
											name: "allocPoint",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastTimestamp",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "accPerShare",
											type: "uint256"
										}, {
											internalType: "contract ERC721[]",
											name: "boosters",
											type: "address[]"
										}, {
											internalType: "string[]",
											name: "boostersMetaData",
											type: "string[]"
										}, {
											internalType: "uint256[]",
											name: "boostersPerc",
											type: "uint256[]"
										}],
										internalType: "struct Farms.PoolInfo",
										name: "dbxPool",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "dbxTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "vaultMultiplier",
										type: "uint256"
									}],
									internalType: "struct MultiCall.VaultsInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "poolId",
									type: "uint256"
								}, {
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									internalType: "address",
									name: "spender",
									type: "address"
								}],
								name: "getVaultUser",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "poolId",
										type: "uint256"
									}, {
										components: [{
											internalType: "uint256",
											name: "amount",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "rewardDebt",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "rewards",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastStaked",
											type: "uint256"
										}],
										internalType: "struct Vault.UserInfo",
										name: "user",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "dbx",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "dbc",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "vdbx",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "bal",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "allowance",
										type: "uint256"
									}],
									internalType: "struct MultiCall.UsersInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getVaultsInfo",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}, {
									components: [{
										internalType: "uint256",
										name: "poolId",
										type: "uint256"
									}, {
										components: [{
											internalType: "string",
											name: "name",
											type: "string"
										}, {
											internalType: "contract IERC20",
											name: "lpToken",
											type: "address"
										}, {
											internalType: "bool",
											name: "isLp",
											type: "bool"
										}, {
											internalType: "uint256",
											name: "allocPoint",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastTimestamp",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "accPerShare",
											type: "uint256"
										}, {
											internalType: "contract ERC721[]",
											name: "boosters",
											type: "address[]"
										}, {
											internalType: "string[]",
											name: "boostersMetaData",
											type: "string[]"
										}, {
											internalType: "uint256[]",
											name: "boostersPerc",
											type: "uint256[]"
										}],
										internalType: "struct Farms.PoolInfo",
										name: "farm",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "vaultTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardsPerSecond",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "farmTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalAllocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "multiplier",
										type: "uint256"
									}, {
										components: [{
											internalType: "string",
											name: "name",
											type: "string"
										}, {
											internalType: "contract IERC20",
											name: "lpToken",
											type: "address"
										}, {
											internalType: "bool",
											name: "isLp",
											type: "bool"
										}, {
											internalType: "uint256",
											name: "allocPoint",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastTimestamp",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "accPerShare",
											type: "uint256"
										}, {
											internalType: "contract ERC721[]",
											name: "boosters",
											type: "address[]"
										}, {
											internalType: "string[]",
											name: "boostersMetaData",
											type: "string[]"
										}, {
											internalType: "uint256[]",
											name: "boostersPerc",
											type: "uint256[]"
										}],
										internalType: "struct Farms.PoolInfo",
										name: "dbxPool",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "dbxTvl",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "vaultMultiplier",
										type: "uint256"
									}],
									internalType: "struct MultiCall.VaultsInfo[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									internalType: "address",
									name: "spender",
									type: "address"
								}],
								name: "getVaultsUser",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "poolId",
										type: "uint256"
									}, {
										components: [{
											internalType: "uint256",
											name: "amount",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "rewardDebt",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "rewards",
											type: "uint256"
										}, {
											internalType: "uint256",
											name: "lastStaked",
											type: "uint256"
										}],
										internalType: "struct Vault.UserInfo",
										name: "user",
										type: "tuple"
									}, {
										internalType: "uint256",
										name: "dbx",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "dbc",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "vdbx",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "bal",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "allowance",
										type: "uint256"
									}],
									internalType: "struct MultiCall.UsersInfo[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "loyalty",
								outputs: [{
									internalType: "contract Loyalty",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "mastermind",
								outputs: [{
									internalType: "contract Mastermind",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "router",
								outputs: [{
									internalType: "contract Router",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "staking",
								outputs: [{
									internalType: "contract Staking",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "vault",
								outputs: [{
									internalType: "contract Vault",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}]
						},
						WETH: {
							address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
							abi: [{
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "src",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "guy",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "Approval",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "dst",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "Deposit",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "src",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "dst",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "Transfer",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "src",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "Withdrawal",
								type: "event"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}, {
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "allowance",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "guy",
									type: "address"
								}, {
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "approve",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "balanceOf",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "decimals",
								outputs: [{
									internalType: "uint8",
									name: "",
									type: "uint8"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "deposit",
								outputs: [],
								stateMutability: "payable",
								type: "function"
							}, {
								inputs: [],
								name: "name",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "symbol",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "totalSupply",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "dst",
									type: "address"
								}, {
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "transfer",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "src",
									type: "address"
								}, {
									internalType: "address",
									name: "dst",
									type: "address"
								}, {
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "transferFrom",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "wad",
									type: "uint256"
								}],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								stateMutability: "payable",
								type: "receive"
							}]
						},
						vDBX: {
							address: "0xc71E4a725c10B38Ddb35BE8aB3d1D77fEd89093F",
							abi: [{
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address[]",
									name: "to",
									type: "address[]"
								}, {
									indexed: !1,
									internalType: "uint256[]",
									name: "value",
									type: "uint256[]"
								}],
								name: "Airdrop",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "owner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "spender",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "value",
									type: "uint256"
								}],
								name: "Approval",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "value",
									type: "uint256"
								}],
								name: "Transfer",
								type: "event"
							}, {
								inputs: [],
								name: "DBX",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "addMinter",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address[]",
									name: "recipients",
									type: "address[]"
								}, {
									internalType: "uint256[]",
									name: "amounts",
									type: "uint256[]"
								}],
								name: "airdrop",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "owner",
									type: "address"
								}, {
									internalType: "address",
									name: "spender",
									type: "address"
								}],
								name: "allowance",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "spender",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "approve",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "balanceOf",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "burn",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "convert",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "decimals",
								outputs: [{
									internalType: "uint8",
									name: "",
									type: "uint8"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "spender",
									type: "address"
								}, {
									internalType: "uint256",
									name: "subtractedValue",
									type: "uint256"
								}],
								name: "decreaseAllowance",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "beneficiary",
									type: "address"
								}],
								name: "estimate",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "spender",
									type: "address"
								}, {
									internalType: "uint256",
									name: "addedValue",
									type: "uint256"
								}],
								name: "increaseAllowance",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "isMinter",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "maxSupply",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "recipient",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "mint",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "name",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "offset",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "removeMinter",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_addi",
									type: "address"
								}],
								name: "setDBX",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_offset",
									type: "uint256"
								}],
								name: "setOffset",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "symbol",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "totalSupply",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "beneficiary",
									type: "address"
								}],
								name: "totalVested",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "recipient",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "transfer",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "sender",
									type: "address"
								}, {
									internalType: "address",
									name: "recipient",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "transferFrom",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "truncate",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "vest",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "vestingPeriod",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}, {
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "vestingSchedules",
								outputs: [{
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "startTimestamp",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "releasedTokens",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}]
						},
						Farms: {
							address: "0xf2f1565a3801742C42286E2C6717460dFB9aE9CD",
							abi: [{
								inputs: [{
									internalType: "contract IERC20",
									name: "_rewardToken",
									type: "address"
								}, {
									internalType: "address",
									name: "_rewardWallet",
									type: "address"
								}],
								stateMutability: "nonpayable",
								type: "constructor"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Deposit",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "EmergencyWithdraw",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Withdraw",
								type: "event"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "addAdmin",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "contract ERC721",
									name: "_booster",
									type: "address"
								}, {
									internalType: "string",
									name: "_boosterMetaData",
									type: "string"
								}, {
									internalType: "uint256",
									name: "_boosterPerc",
									type: "uint256"
								}],
								name: "addBooster",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "string",
									name: "_name",
									type: "string"
								}, {
									internalType: "uint256",
									name: "_allocPoint",
									type: "uint256"
								}, {
									internalType: "contract IERC20",
									name: "_lpToken",
									type: "address"
								}, {
									internalType: "bool",
									name: "_isLp",
									type: "bool"
								}],
								name: "addPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									components: [{
										internalType: "contract ERC721",
										name: "booster",
										type: "address"
									}, {
										internalType: "uint256",
										name: "tokenId",
										type: "uint256"
									}],
									internalType: "struct DBFarms.UserBoosters",
									name: "_userBoosters",
									type: "tuple"
								}],
								name: "addUserBoosters",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "admin",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "contract ERC721",
									name: "_booster",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_tokenId",
									type: "uint256"
								}],
								name: "boost",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "compound",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "deposit",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "emergencyWithdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "emitDeposit",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "emitEmergencyWithdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "emitWithdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "getLogicContract",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getMaxBoost",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getMultiplier",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getPool",
								outputs: [{
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}, {
										internalType: "bool",
										name: "isLp",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "allocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "lastTimestamp",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "accPerShare",
										type: "uint256"
									}, {
										internalType: "contract ERC721[]",
										name: "boosters",
										type: "address[]"
									}, {
										internalType: "string[]",
										name: "boostersMetaData",
										type: "string[]"
									}, {
										internalType: "uint256[]",
										name: "boostersPerc",
										type: "uint256[]"
									}],
									internalType: "struct DBFarms.PoolInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getPoolInfo",
								outputs: [{
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}, {
										internalType: "bool",
										name: "isLp",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "allocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "lastTimestamp",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "accPerShare",
										type: "uint256"
									}, {
										internalType: "contract ERC721[]",
										name: "boosters",
										type: "address[]"
									}, {
										internalType: "string[]",
										name: "boostersMetaData",
										type: "string[]"
									}, {
										internalType: "uint256[]",
										name: "boostersPerc",
										type: "uint256[]"
									}],
									internalType: "struct DBFarms.PoolInfo[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getRewardPerSecond",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getRewardToken",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getRewardWallet",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getTotalAllocPoint",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getTotalPools",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getTvl",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getUser",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "amount",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardDebt",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalIn",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalOut",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalRewards",
										type: "uint256"
									}],
									internalType: "struct DBFarms.UserInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getUserBoostRate",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getUserBoosters",
								outputs: [{
									components: [{
										internalType: "contract ERC721",
										name: "booster",
										type: "address"
									}, {
										internalType: "uint256",
										name: "tokenId",
										type: "uint256"
									}],
									internalType: "struct DBFarms.UserBoosters[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}, {
									internalType: "address",
									name: "",
									type: "address"
								}, {
									internalType: "uint256",
									name: "",
									type: "uint256"
								}, {
									internalType: "bytes",
									name: "",
									type: "bytes"
								}],
								name: "onERC721Received",
								outputs: [{
									internalType: "bytes4",
									name: "",
									type: "bytes4"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "pendingRewards",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}, {
										internalType: "bool",
										name: "isLp",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "allocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "lastTimestamp",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "accPerShare",
										type: "uint256"
									}, {
										internalType: "contract ERC721[]",
										name: "boosters",
										type: "address[]"
									}, {
										internalType: "string[]",
										name: "boostersMetaData",
										type: "string[]"
									}, {
										internalType: "uint256[]",
										name: "boostersPerc",
										type: "uint256[]"
									}],
									internalType: "struct DBFarms.PoolInfo",
									name: "pool",
									type: "tuple"
								}],
								name: "pushToPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_id",
									type: "uint256"
								}, {
									internalType: "contract ERC721",
									name: "_nft",
									type: "address"
								}],
								name: "recoverNft",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "contract IERC20",
									name: "_token",
									type: "address"
								}],
								name: "recoverToken",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "removeAdmin",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									components: [{
										internalType: "contract ERC721",
										name: "booster",
										type: "address"
									}, {
										internalType: "uint256",
										name: "tokenId",
										type: "uint256"
									}],
									internalType: "struct DBFarms.UserBoosters",
									name: "_userBoosters",
									type: "tuple"
								}],
								name: "removeUserBoosters",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "contract ERC721",
									name: "_booster",
									type: "address"
								}, {
									internalType: "string",
									name: "_boosterMetaData",
									type: "string"
								}, {
									internalType: "uint256",
									name: "_boosterPerc",
									type: "uint256"
								}],
								name: "setBooster",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newAddress",
									type: "address"
								}],
								name: "setLogicContract",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newValue",
									type: "uint256"
								}],
								name: "setMaxBoost",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newValue",
									type: "uint256"
								}],
								name: "setMultiplier",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_allocPoint",
									type: "uint256"
								}],
								name: "setPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}, {
										internalType: "bool",
										name: "isLp",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "allocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "lastTimestamp",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "accPerShare",
										type: "uint256"
									}, {
										internalType: "contract ERC721[]",
										name: "boosters",
										type: "address[]"
									}, {
										internalType: "string[]",
										name: "boostersMetaData",
										type: "string[]"
									}, {
										internalType: "uint256[]",
										name: "boostersPerc",
										type: "uint256[]"
									}],
									internalType: "struct DBFarms.PoolInfo",
									name: "_pool",
									type: "tuple"
								}],
								name: "setPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newWallet",
									type: "address"
								}],
								name: "setRewardWallet",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newValue",
									type: "uint256"
								}],
								name: "setTotalAllocPoint",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									components: [{
										internalType: "uint256",
										name: "amount",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardDebt",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalIn",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalOut",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "totalRewards",
										type: "uint256"
									}],
									internalType: "struct DBFarms.UserInfo",
									name: "_user",
									type: "tuple"
								}],
								name: "setUser",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									components: [{
										internalType: "contract ERC721",
										name: "booster",
										type: "address"
									}, {
										internalType: "uint256",
										name: "tokenId",
										type: "uint256"
									}],
									internalType: "struct DBFarms.UserBoosters[]",
									name: "_userBoosters",
									type: "tuple[]"
								}],
								name: "setUserBoosters",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "contract ERC721",
									name: "_booster",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_tokenId",
									type: "uint256"
								}],
								name: "unboost",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "updatePool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_token",
									type: "address"
								}],
								name: "zapIn",
								outputs: [],
								stateMutability: "payable",
								type: "function"
							}]
						},
						Vaults: {
							address: "0xDCaAcb058C14CE56A820175388771fed195Fa37D",
							abi: [{
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}],
								name: "AddAdmin",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Deposit",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}],
								name: "EmergencyWithdraw",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}],
								name: "Harvest",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}],
								name: "RemoveAdmin",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "pid",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Withdraw",
								type: "event"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "addAdmin",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_vault",
									type: "address"
								}],
								name: "addVault",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "admin",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "admins",
								outputs: [{
									internalType: "address[]",
									name: "",
									type: "address[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "autoCompound",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "deposit",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "depositOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "emergencyWithdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "emergencyWithdrawOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getAccPerShare",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_token",
									type: "address"
								}],
								name: "getAllTimeTracking",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getDebt",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getLastCompounded",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_token",
									type: "address"
								}],
								name: "getPeriodLastReset",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_token",
									type: "address"
								}],
								name: "getPeriodTracking",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getPool",
								outputs: [{
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}, {
										internalType: "bool",
										name: "isLp",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "allocPoint",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "lastTimestamp",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "accPerShare",
										type: "uint256"
									}, {
										internalType: "contract ERC721[]",
										name: "boosters",
										type: "address[]"
									}, {
										internalType: "string[]",
										name: "boostersMetaData",
										type: "string[]"
									}, {
										internalType: "uint256[]",
										name: "boostersPerc",
										type: "uint256[]"
									}],
									internalType: "struct Farms.PoolInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getRewardWallet",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getRouter",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getTeamWallet",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getTvl",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getUser",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "amount",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardDebt",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewards",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "lastStaked",
										type: "uint256"
									}],
									internalType: "struct Vault.UserInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "getVault",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "harvest",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "harvestOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "contract IERC20",
									name: "_token",
									type: "address"
								}, {
									internalType: "address",
									name: "_recipient",
									type: "address"
								}],
								name: "mintRewards",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "pendingRewards",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "removeAdmin",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_token",
									type: "address"
								}],
								name: "resetPeriodTracking",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newRewardWallet",
									type: "address"
								}],
								name: "updateRewardWallet",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "contract RewardsPool",
									name: "_newRewardsPool",
									type: "address"
								}],
								name: "updateRewardsPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newRouter",
									type: "address"
								}],
								name: "updateRouter",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newTeamWallet",
									type: "address"
								}],
								name: "updateTeamWallet",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "withdrawOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}]
						},
						RealYield: {
							address: "0x2480C39e4A603DB76214874410e72F43F6Ba6EFD",
							abi: [{
								inputs: [],
								stateMutability: "nonpayable",
								type: "constructor"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Deposit",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "EmergencyWithdraw",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Withdraw",
								type: "event"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "deposit",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "depositOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "emergencyWithdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "emergencyWithdrawOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "forceUpdate",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "getAccPerShare",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getLastTimestamp",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getMaxCap",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getMinCap",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getPool",
								outputs: [{
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}],
									internalType: "struct TestDBYield.PoolInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getRewardsPerSecond",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getTvl",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getUser",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "amount",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardDebt",
										type: "uint256"
									}],
									internalType: "struct TestDBYield.UserInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "pendingRewards",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_maxCap",
									type: "uint256"
								}],
								name: "setMaxCap",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_minCap",
									type: "uint256"
								}],
								name: "setMinCap",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "contract RewardsPool",
									name: "_rewardsPool",
									type: "address"
								}],
								name: "updateRewardsPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "withdrawOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}]
						},
						Mastermind: {
							address: "0xDB396ac73C89833baf049a6077026BB3483Bfb40",
							abi: [{
								inputs: [],
								stateMutability: "nonpayable",
								type: "constructor"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "bonus",
									type: "uint256"
								}],
								name: "BonusSet",
								type: "event"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}],
								name: "buy",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}],
								name: "Buy",
								type: "event"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}],
								name: "buyDBF",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}],
								name: "buyUSDC",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "multiplier",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "period",
									type: "uint256"
								}],
								name: "createPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}],
								name: "disablePool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}],
								name: "enablePool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "multiplier",
									type: "uint256"
								}],
								name: "MultiplierSet",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "multiplier",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "period",
									type: "uint256"
								}],
								name: "PoolCreated",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}],
								name: "PoolDisabled",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}],
								name: "PoolEnabled",
								type: "event"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newBonus",
									type: "uint256"
								}],
								name: "setBonus",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "multiplier",
									type: "uint256"
								}],
								name: "setDBFMultiplier",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "multiplier",
									type: "uint256"
								}],
								name: "setMultiplier",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newWallet",
									type: "address"
								}],
								name: "setTeamWallet",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "vest",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amountIn",
									type: "uint256"
								}],
								name: "Vest",
								type: "event"
							}, {
								inputs: [],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amountOut",
									type: "uint256"
								}],
								name: "Withdraw",
								type: "event"
							}, {
								inputs: [],
								name: "bonus",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "DBF",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "dbfMultiplier",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "DBX",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "estimate",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}],
								name: "getPool",
								outputs: [{
									components: [{
										internalType: "bool",
										name: "enabled",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "multiplier",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "period",
										type: "uint256"
									}],
									internalType: "struct DegenBrainsMastermind.VestingPool",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getPools",
								outputs: [{
									components: [{
										internalType: "bool",
										name: "enabled",
										type: "bool"
									}, {
										internalType: "uint256",
										name: "multiplier",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "period",
										type: "uint256"
									}],
									internalType: "struct DegenBrainsMastermind.VestingPool[]",
									name: "",
									type: "tuple[]"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getTotalPools",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "rewardsPool",
								outputs: [{
									internalType: "contract RewardsPool",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "router",
								outputs: [{
									internalType: "contract Router",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "teamWallet",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "totalPools",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "totalVested",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "USDC",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "VDBX",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "vestingPools",
								outputs: [{
									internalType: "bool",
									name: "enabled",
									type: "bool"
								}, {
									internalType: "uint256",
									name: "multiplier",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "period",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}, {
									internalType: "uint256",
									name: "",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "vestingSchedules",
								outputs: [{
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "startTimestamp",
									type: "uint256"
								}, {
									internalType: "uint256",
									name: "releasedTokens",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}]
						},
						FarmsAdmin: {
							address: "0x9fccc35cEE56E6082170f6d0813Ea220a32Fe9f6",
							abi: [{
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "allowAddress",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "blockFarm",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newMultiplier",
									type: "uint256"
								}],
								name: "setVaultMultiplier",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "unAllowAddress",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "unblockFarm",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "allowedAddress",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "blockedFarms",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getVaultMultiplier",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "isAllowed",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_pid",
									type: "uint256"
								}],
								name: "isBlocked",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "vaultMultiplier",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}]
						},
						vDBXStaking: {
							address: "0xF09A70A9B8509C9962B7022dcFe60f5CEe8A6ac3",
							abi: [{
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "deposit",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Deposit",
								type: "event"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "depositOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "emergencyWithdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "user",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "EmergencyWithdraw",
								type: "event"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "emergencyWithdrawOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "forceUpdate",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newApr",
									type: "uint256"
								}],
								name: "setApr",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "contract RewardsPool",
									name: "_rewardsPool",
									type: "address"
								}],
								name: "updateRewardsPool",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "withdraw",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "account",
									type: "address"
								}, {
									indexed: !1,
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "Withdraw",
								type: "event"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}, {
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "withdrawOnBehalf",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "getAccPerShare",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getApr",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getLastTimestamp",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getPool",
								outputs: [{
									components: [{
										internalType: "string",
										name: "name",
										type: "string"
									}, {
										internalType: "contract IERC20",
										name: "lpToken",
										type: "address"
									}],
									internalType: "struct vDBXStaking.PoolInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "account",
									type: "address"
								}],
								name: "getStakedBalance",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getTvl",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "getUser",
								outputs: [{
									components: [{
										internalType: "uint256",
										name: "amount",
										type: "uint256"
									}, {
										internalType: "uint256",
										name: "rewardDebt",
										type: "uint256"
									}],
									internalType: "struct vDBXStaking.UserInfo",
									name: "",
									type: "tuple"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_account",
									type: "address"
								}],
								name: "pendingRewards",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}]
						},
						NftLaunchpad: {
							address: "0x97022c2204AeD04867ac4F58f77e35A2434088Db",
							abi: [{
								inputs: [{
									internalType: "string",
									name: "_initBaseURI",
									type: "string"
								}],
								stateMutability: "nonpayable",
								type: "constructor"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "owner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "approved",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "Approval",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "owner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "operator",
									type: "address"
								}, {
									indexed: !1,
									internalType: "bool",
									name: "approved",
									type: "bool"
								}],
								name: "ApprovalForAll",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									indexed: !0,
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "Transfer",
								type: "event"
							}, {
								inputs: [],
								name: "DBF",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "DBX",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "USDC",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "_name",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "_symbol",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address[]",
									name: "_users",
									type: "address[]"
								}, {
									internalType: "uint256[]",
									name: "_amounts",
									type: "uint256[]"
								}],
								name: "addBulkFreeMints",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address[]",
									name: "_users",
									type: "address[]"
								}],
								name: "addBulkVip",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_user",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "addFreeMints",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_user",
									type: "address"
								}],
								name: "addVip",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "addressMintedBalance",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "approve",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "owner",
									type: "address"
								}],
								name: "balanceOf",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "baseExtension",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "baseURI",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "claim",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "cost",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "dbfCost",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "dbfLeft",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_mintAmount",
									type: "uint256"
								}],
								name: "emerygencyMint",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "freeMints",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "getApproved",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getCost",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "getStartTime",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "owner",
									type: "address"
								}, {
									internalType: "address",
									name: "operator",
									type: "address"
								}],
								name: "isApprovedForAll",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "loyalty",
								outputs: [{
									internalType: "contract Loyalty",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "maxSupply",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_mintAmount",
									type: "uint256"
								}],
								name: "mint",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "name",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "nftPerAddressLimit",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "notRevealedUri",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "ownerOf",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "paused",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address[]",
									name: "_users",
									type: "address[]"
								}],
								name: "removeBulkVip",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_user",
									type: "address"
								}],
								name: "removeVip",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_id",
									type: "uint256"
								}, {
									internalType: "address",
									name: "recipient",
									type: "address"
								}, {
									internalType: "address",
									name: "NFT",
									type: "address"
								}],
								name: "rescueNft",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_adr",
									type: "address"
								}, {
									internalType: "uint256",
									name: "amount",
									type: "uint256"
								}],
								name: "rescueTokens",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "reservedSupply",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "reveal",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "revealed",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "safeTransferFrom",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}, {
									internalType: "bytes",
									name: "data",
									type: "bytes"
								}],
								name: "safeTransferFrom",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "operator",
									type: "address"
								}, {
									internalType: "bool",
									name: "approved",
									type: "bool"
								}],
								name: "setApprovalForAll",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "string",
									name: "_newBaseExtension",
									type: "string"
								}],
								name: "setBaseExtension",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "string",
									name: "_newBaseURI",
									type: "string"
								}],
								name: "setBaseURI",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address[]",
									name: "_users",
									type: "address[]"
								}, {
									internalType: "uint256[]",
									name: "_amounts",
									type: "uint256[]"
								}],
								name: "setBulkFreeMints",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newcost",
									type: "uint256"
								}],
								name: "setCost",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newcost",
									type: "uint256"
								}],
								name: "setDBFCost",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_user",
									type: "address"
								}, {
									internalType: "uint256",
									name: "_amount",
									type: "uint256"
								}],
								name: "setFreeMints",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_max",
									type: "uint256"
								}],
								name: "setMaxPerAddress",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "string",
									name: "_notRevealedURI",
									type: "string"
								}],
								name: "setNotRevealedURI",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_startTime",
									type: "uint256"
								}],
								name: "setStartTime",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_newAdi",
									type: "address"
								}],
								name: "setTeamAddress",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "startTime",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "supplyLeft",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "bytes4",
									name: "interfaceId",
									type: "bytes4"
								}],
								name: "supportsInterface",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "symbol",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "teamAddress",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_mintAmount",
									type: "uint256"
								}],
								name: "teamMint",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "index",
									type: "uint256"
								}],
								name: "tokenByIndex",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "owner",
									type: "address"
								}, {
									internalType: "uint256",
									name: "index",
									type: "uint256"
								}],
								name: "tokenOfOwnerByIndex",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "tokenURI",
								outputs: [{
									internalType: "string",
									name: "",
									type: "string"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								name: "tokensMinted",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "totalSupply",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									internalType: "address",
									name: "to",
									type: "address"
								}, {
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}],
								name: "transferFrom",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								name: "vip",
								outputs: [{
									internalType: "bool",
									name: "",
									type: "bool"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "_owner",
									type: "address"
								}],
								name: "walletOfOwner",
								outputs: [{
									internalType: "uint256[]",
									name: "",
									type: "uint256[]"
								}],
								stateMutability: "view",
								type: "function"
							}]
						},
						GhoulsMM: {
							address: "0x82Ae3Dd1c9CAf4dE8D3586D5f2bBea9c36723FF5",
							abi: [{
								inputs: [{
									internalType: "uint256",
									name: "_mintAmount",
									type: "uint256"
								}],
								name: "mint",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "operator",
									type: "address"
								}, {
									internalType: "address",
									name: "from",
									type: "address"
								}, {
									internalType: "uint256",
									name: "tokenId",
									type: "uint256"
								}, {
									internalType: "bytes",
									name: "data",
									type: "bytes"
								}],
								name: "onERC721Received",
								outputs: [{
									internalType: "bytes4",
									name: "",
									type: "bytes4"
								}],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								anonymous: !1,
								inputs: [{
									indexed: !0,
									internalType: "address",
									name: "previousOwner",
									type: "address"
								}, {
									indexed: !0,
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "OwnershipTransferred",
								type: "event"
							}, {
								inputs: [{
									internalType: "address",
									name: "tokenAddress",
									type: "address"
								}],
								name: "recoverERC20",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "recoverETH",
								outputs: [],
								stateMutability: "payable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "id",
									type: "uint256"
								}],
								name: "recoverNft",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "renounceOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "uint256",
									name: "_newcost",
									type: "uint256"
								}],
								name: "setCost",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [{
									internalType: "address",
									name: "newOwner",
									type: "address"
								}],
								name: "transferOwnership",
								outputs: [],
								stateMutability: "nonpayable",
								type: "function"
							}, {
								inputs: [],
								name: "cost",
								outputs: [{
									internalType: "uint256",
									name: "",
									type: "uint256"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "DBX",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "ghouls",
								outputs: [{
									internalType: "contract Ghouls",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "owner",
								outputs: [{
									internalType: "address",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}, {
								inputs: [],
								name: "USDC",
								outputs: [{
									internalType: "contract IERC20",
									name: "",
									type: "address"
								}],
								stateMutability: "view",
								type: "function"
							}]
						}
					}
				}
			}
		},
		390: function(e, n) {},
		391: function(e, n) {},
		419: function(e, n, t) {},
		448: function(e, n) {},
		482: function(e, n) {},
		484: function(e, n) {},
		499: function(e, n) {},
		514: function(e, n) {},
		516: function(e, n) {},
		528: function(e, n) {},
		529: function(e, n) {},
		549: function(e, n) {},
		552: function(e, n) {},
		554: function(e, n) {},
		699: function(e, n, t) {},
		700: function(e, n, t) {
			"use strict";
			t.r(n);
			var a = t(719),
				i = t(723),
				s = t(725),
				r = t(1),
				o = t(345),
				p = t(75),
				l = t(166),
				c = t.n(l),
				d = t(11),
				u = (t(241), t(231)),
				m = t(36),
				y = t(12),
				b = (t(419), t(124));
			const x = {
				header: {
					english: {
						home: "Home",
						trade: "Trade",
						earn: "Earn",
						learn: "Learn",
						play: "Play",
						other: "Other",
						dbxPrice: "DBX Price:",
						swap: "Swap",
						liquidity: "Liquidity",
						farms: "Farms",
						staking: "Staking",
						vaults: "Vaults",
						mastermind: "Mastermind",
						launchpad: "Launchpad",
						portfolio: "Portfolio"
					},
					spanish: {
						home: "Hogar",
						trade: "Comercio",
						earn: "Ganar",
						learn: "Aprender",
						play: "Play",
						other: "Otro",
						dbxPrice: "Precio DBX:",
						swap: "Intercambio",
						liquidity: "Liquidez",
						farms: "Granjas",
						staking: "Replanteo",
						vaults: "B\xf3vedas",
						mastermind: "Cerebro",
						launchpad: "Plataforma de lanzamiento",
						portfolio: "Portafolio"
					}
				},
				footer: {
					english: {
						footer: "2023 Degen Brain Finance. All rights reserved.",
						madeWith: "Made with ",
						by: " by the DBF Team"
					},
					spanish: {
						footer: "2023 Finanzas cerebrales Degen. Reservados todos los derechos.",
						madeWith: "Hecho con ",
						by: " por el equipo DBF"
					}
				},
				pageTitles: {
					english: {
						home: "WELCOME TO DEGEN BRAIN FINANCE!",
						dbfStaking: "$DBF Staking",
						nftStaking: "Stake Your DegenBrains",
						about: "About",
						roadmap: "Roadmap",
						team: "Team",
						L2E: "Learn to Earn",
						gallery: "Gallery",
						search: "Search DegenBrains",
						vault: "Vaults",
						raffle: "Raffle",
						articles: "Articles",
						box: "Mystery Boxes",
						swap: "Swap",
						nfts: "NFTs",
						liquidity: "Liquidity",
						farms: "Farms",
						staking: "Staking",
						vaults: "Vaults",
						mastermind: "Mastermind",
						portfolio: "Portfolio",
						launchpad: "Launchpad"
					},
					spanish: {
						home: "\xa1BIENVENIDOS A DEGEN BRAIN FINANCE!",
						dbfStaking: "escatar $DBF",
						nftStaking: "estaca tu DegenBrains",
						about: "acera de",
						roadmap: "Roadmap",
						team: "equipo",
						L2E: "aprender a ganar",
						gallery: "galer\xeda",
						search: "busque en DegenBrains",
						vault: "b\xf3vedas",
						raffle: "Rifa",
						articles: "art\xedculos",
						box: "Cajas misteriosas",
						swap: "Intercambio",
						nfts: "NFTs",
						liquidity: "Liquidez",
						farms: "Granjas",
						staking: "Replanteo",
						vaults: "B\xf3vedas",
						mastermind: "Cerebro",
						portfolio: "Portafolio",
						launchpad: "Plataforma de lanzamiento"
					}
				},
				home: {
					english: {
						text1: "NFTs,",
						text2: "Learn2Earn,",
						text3: "DeFi Strategies,",
						text4: "Community",
						join: "Join Degen Brain Finance today.",
						discord: "JOIN OUR DISCORD",
						title: "DegenBrains Exchange (DBX) is a decentralized cross-chain exchange, built by the Degen Brain Finance (DBF) team.",
						subtitle: "Available on Arbitrum, Base and Cronos, with expansions planned to more chain(s) in the future. DBX will offer you Token Swaps, LP Farming, NFT staking, Farm Boosting, Play2Earn Games, and more!",
						joinIdo: "Join Our IDO!",
						tradeNow: "Trade Now",
						startEarning: "Start Earning",
						gitbook: "Gitbook"
					},
					spanish: {
						text1: "NFTs,",
						text2: "Aprende2Gana,",
						text3: "estrategias de defi,",
						text4: "Comunidad",
						join: "\xdanase a Degen Brain Finance hoy.",
						discord: "\xdaNASE A NUESTRA DISCORDIA",
						title: "DegenBrains Exchange (DBX) es un intercambio de cadena cruzada descentralizado, creado por el equipo de Degen Brain Finance (DBF).",
						subtitle: "Disponible en Arbitrum, Base y Cronos, con expansiones planificadas a m\xe1s cadenas en el futuro. \xa1DBX le ofrecer\xe1 intercambios de tokens, LP Farming, NFT Staking, Farm Boosting, juegos Play2Earn y m\xe1s!",
						joinIdo: "\xa1\xdanete a nuestra IDO!",
						tradeNow: "Negocia ahora",
						startEarning: "Empezar a ganar",
						gitbook: "Gitbook"
					}
				},
				launchpad: {
					english: {
						icoError: "Error getting ICO details",
						approveSuccess: "Approval successful",
						approveError: "Error Approving",
						depositSuccess: "Deposit successful",
						depositError: "Error depositing",
						withdrawlSuccess: "Withdrawl successful",
						withdrawlError: "Error withdrawing",
						depositReceive: "Deposit USDC, receive DBX!",
						loadingWait: "Loading please wait...",
						publicStarts: "Public sale starts in",
						publicEnds: "Public sale ends in",
						presaleStarts: "Presale starts in",
						presaleEnds: "Presale ends in",
						publicTime: "public sale will start at this time",
						concluded: "Sale has concluded! DBX tokens will be available to claim here after liquidity has been formed!",
						concludedClaim: "Sale has concluded! DBX tokens are now available to claim!",
						totalDeposit: "Total deposited: %deposited% USDC deposited",
						yourDeposit: "Your deposit: %deposited% USDC deposited",
						youReceive: "DBX tokens you will receive: %receive% DBX",
						yourShare: "Your Share: %share%%",
						softCap: "Softcap: %cap% USDC",
						hardCap: "Hardcap: %cap% USDC",
						rate: "Rate: %price% USDC = 1 DBX",
						usdcBalance: "Your USDC Balance: %balance%",
						enterAmount: "Enter the amount to deposit:",
						deposit: "Deposit",
						depositing: "Depositing...",
						approve: "Approve USDC",
						approving: "Approving...",
						youWillReceive: "You will recieve ~%amount% DBX",
						claim: "Claim"
					},
					spanish: {
						icoError: "Error al obtener los detalles de la ICO",
						approveSuccess: "Aprobaci\xf3n exitosa",
						approveError: "Error al aprobar",
						depositSuccess: "Dep\xf3sito exitosa",
						depositError: "Error al depositar",
						withdrawlSuccess: "retiro exitoso",
						withdrawlError: "Error al retirar",
						depositReceive: "\xa1Deposita USDC, recibe DBX!",
						loadingWait: "Cargando por favor espere...",
						publicStarts: "La venta p\xfablica comienza en",
						publicEnds: "La venta p\xfablica finaliza en",
						presaleStarts: "La preventa comienza en",
						presaleEnds: "La preventa termina en",
						publicTime: "la venta p\xfablica comenzar\xe1 en este momento",
						concluded: "\xa1La venta ha concluido! \xa1Los tokens DBX estar\xe1n disponibles para reclamar aqu\xed despu\xe9s de que se haya formado la liquidez!",
						concludedClaim: "\xa1La venta ha concluido! \xa1Los tokens DBX ya est\xe1n disponibles para reclamar!",
						totalDeposit: "Total depositada: %deposited% USDC depositado",
						yourDeposit: "Tu deposito: %deposited% USDC depositado",
						youReceive: "Fichas DBX que recibir\xe1: %receive% DBX",
						yourShare: "Tu parte: %share%%",
						softCap: "Tapa blanda: %cap% USDC",
						hardCap: "Tapa dura: %cap% USDC",
						rate: "Tasa: %price% USDC = 1 DBX",
						usdcBalance: "Su saldo USDC: %balance%",
						enterAmount: "Ingresa el monto a depositar:",
						deposit: "Dep\xf3sito",
						depositing: "Depositando...",
						approve: "Aprobar USDC",
						approving: "Aprobatoria...",
						youWillReceive: "Recibir\xe1s ~%amount% DBX",
						claim: "Afirmar"
					}
				},
				mastermind: {
					english: {
						welcome: "Welcome to the mastermind!",
						loadingWait: "Loading please wait...",
						vestBreakdown: "Vest vDBX over a 180 day period to receive 1:1 DBX or convert now for a 10:1 ratio.",
						enterVestAmount: "Enter the amount to vest/convert",
						vest: "Vest",
						vesting: "Vesting...",
						convert: "Convert",
						converting: "Converting...",
						willReceive: "You will receive %vestAmount% $DBX over 180 days if you vest or %convertAmount% $DBX if you convert now.",
						burn: "Your %amount% $vDBX will be burned instantly. This transaction cannot be reversed.",
						vestRewards: "Vested rewards",
						currentVest: "Currently Vesting:",
						claim: "Claim",
						claiming: "Claiming...",
						detailsError: "Error getting details",
						vestSuccess: "Vest successful",
						vestError: "Error vesting",
						convertSuccess: "Convert successful",
						convertError: "Error converting",
						withdrawlsSuccess: "Withdrawl successful",
						withdrawlsError: "Error withdrawing",
						balance: "vDBX Balance"
					},
					spanish: {
						welcome: "\xa1Bienvenido a la mente maestra!",
						loadingWait: "Cargando por favor espere...",
						vestBreakdown: "Adquiera vDBX durante un per\xedodo de 180 d\xedas para recibir DBX 1:1 o convierta ahora para obtener una proporci\xf3n de 10:1.",
						enterVestAmount: "Enter the amount to vest/convert",
						vest: "Chaleco",
						vesting: "Adquisici\xf3n...",
						convert: "Convertir",
						converting: "Mudada...",
						willReceive: "Recibir\xe1 %vestAmount% $DBX durante 180 d\xedas si otorga o %convertAmount% $DBX si convierte ahora.",
						burn: "Su %amount% $vDBX se quemar\xe1 instant\xe1neamente. Esta transacci\xf3n no se puede revertir.",
						vestRewards: "Recompensas adquiridas",
						currentVest: "Adquisici\xf3n actual:",
						claim: "Afirmar",
						claiming: "Reclamando...",
						detailsError: "Error al obtener detalles",
						vestSuccess: "Chaleco exitosa",
						vestError: "Adquisici\xf3n de errores",
						convertSuccess: "Convertir exitosa",
						convertError: "Error al convertir",
						withdrawlsSuccess: "Retiro exitoso",
						withdrawlsError: "Error al retirar",
						balance: "Saldo vDBX"
					}
				},
				swap: {
					english: {
						wrap: "Wrap",
						wrapping: "Wrapping...",
						unwrap: "Unwrap",
						unwrapping: "Unwrapping...",
						swap: "Swap",
						swapping: "Swapping...",
						swapSuccess: "Swap successful",
						swapError: "Error swapping",
						wrapSuccess: "Wrap successful",
						wrapError: "Error wrapping",
						unwrapSuccess: "Unwrap successful",
						unwrapError: "Error unwrapping",
						routerMessage: "NOTE: This page is utilizing the a 3rd party Router for testing purposes - Still in BETA - Use at your own risk",
						swapTokens: "Swap Tokens",
						balance: "Balance: %balance%",
						from: "From:",
						to: "To:",
						insufficientLiq: "Insufficient Liquidity",
						insufficientBal: "Insufficient Balance",
						impactTooHigh: "Price Impact Too High",
						approve: "Approve",
						approving: "Approving...",
						price: "Price:",
						perMessage: "%amount% %tokenTwo% per %tokenOne%",
						priceImpact: "Price Impact:",
						slippage: "Slippage:",
						swapFee: "Swap Fee:",
						minReceived: "Min Received:",
						taxMessage: "This trade will be taxed by %taxAmount%%"
					},
					spanish: {
						wrap: "Envoltura",
						wrapping: "Envase...",
						unwrap: "Desenvolver",
						unwrapping: "Desenvolver...",
						swap: "Intercambio",
						swapping: "Intercambio...",
						swapSuccess: "Intercambio exitosa",
						swapError: "Intercambio de errores",
						wrapSuccess: "Envoltura exitosa",
						wrapError: "Envoltura de errores",
						unwrapSuccess: "Desenvolver exitosa",
						unwrapError: "Error al desenvolver",
						routerMessage: "NOTA: Esta p\xe1gina est\xe1 utilizando un enrutador de terceros con fines de prueba. Todav\xeda en BETA. \xdaselo bajo su propio riesgo.",
						swapTokens: "Intercambiar fichas",
						balance: "Saldo: %balance%",
						from: "De:",
						to: "A:",
						insufficientLiq: "Liquidez insuficiente",
						insufficientBal: "Saldo insuficiente",
						impactTooHigh: "Impacto de precio demasiado alto",
						approve: "Aprobar",
						approving: "Aprobatoria...",
						price: "Precio:",
						perMessage: "%amount% %tokenTwo% por %tokenOne%",
						priceImpact: "Impacto en el precio:",
						slippage: "Deslizamiento:",
						swapFee: "Tarifa de intercambio:",
						minReceived: "Min Recibida:",
						taxMessage: "Este comercio estar\xe1 gravado con un %taxAmount%%"
					}
				},
				lp: {
					english: {
						tokensError: "Error getting tokens",
						routerMessage: "NOTE: This page is utilizing the a 3rd party Router for testing purposes - Still in BETA - Use at your own risk",
						approve: "Approve",
						approving: "Approving...",
						approveSuccess: "Successfully approved",
						approveError: "Error approving",
						addSuccess: "Successfully added liquidity",
						addError: "Error adding liquidity",
						viewAll: "View All",
						addLiquidity: "Add Liquidity",
						addingLiq: "Adding liquidity...",
						viewLiquidity: "View Liquidity",
						loadingLiq: "Loading your liquidity pairs, please wait...",
						noneFound: "No liquidity found",
						from: "From:",
						to: "To:",
						balance: "Balance: %amount%",
						loading: "loading...",
						doesntExist: "Pair Doesn't Exist",
						insufficientBal: "Insufficient Balance",
						taxMessage: "This trade will be taxed by %tax%%",
						total: "Total:",
						share: "Share of pool:",
						lessThan1: "Less than 1%",
						pooled: "Pooled %currency%:",
						add: "Add",
						remove: "Remove",
						showLess: "show less",
						showMore: "show more"
					},
					spanish: {
						tokensError: "Error al obtener fichas",
						routerMessage: "NOTA: Esta p\xe1gina est\xe1 utilizando un enrutador de terceros con fines de prueba. Todav\xeda en BETA. \xdaselo bajo su propio riesgo.",
						approve: "Aprobar",
						approving: "Aprobatoria...",
						approveSuccess: "Aprobado con \xe9xito",
						approveError: "Error al aprobar",
						addSuccess: "Liquidez a\xf1adida con \xe9xito",
						addError: "Error al agregar liquidez",
						viewAll: "Ver todo",
						addLiquidity: "A\xf1adir Liquidez",
						addingLiq: "Agregando liquidez...",
						viewLiquidity: "Ver Liquidez",
						loadingLiq: "Cargando sus pares de liquidez, por favor espere...",
						noneFound: "No se encontr\xf3 liquidez",
						from: "De:",
						to: "A:",
						balance: "Balance: %amount%",
						loading: "cargando...",
						doesntExist: "El par no existe",
						insufficientBal: "Saldo insuficiente",
						taxMessage: "Este comercio estar\xe1 gravado con un %tax%%",
						total: "Total:",
						share: "Parte de la piscina:",
						lessThan1: "Menos que 1%",
						pooled: "Agrupados %currency%:",
						add: "Agregar",
						remove: "Eliminar",
						showLess: "muestra menos",
						showMore: "mostrar m\xe1s"
					}
				},
				farm: {
					english: {
						poolError: "Error getting pool info",
						userError: "Error getting user info",
						approveSuccess: "Successfully approved",
						approveError: "Error approving",
						zeroStakeErr: "Error: you need to stake more than 0!",
						zeroUnstakeErr: "Error: you cannot unstake 0!",
						balanceError: "Error: balance too low!",
						stakeSuccess: "Successfully staked",
						stakeError: "Error staking",
						unstakeSuccess: "Successfully unstaked",
						unstakeError: "Error unstaking",
						zeroClaimErr: "Error: nothing to claim!",
						claimSuccess: "Successfully claimed",
						claimError: "Error claiming",
						loadingFarm: "Loading please wait...",
						staked: "Staked:",
						rewards: "Rewards:",
						apr: "APR:",
						apy: "APY:",
						dpr: "DPR:",
						tvl: "TVL:",
						stake: "Stake",
						staking: "Staking...",
						unstake: "Unstake",
						unstaking: "Unstaking...",
						approve: "Approve",
						approving: "Approving...",
						balance: "Balance: %balance% %currency%",
						harvest: "Harvest %dollarAmount%",
						harvesting: "Harvesting...",
						claim: "Claim Rewards",
						claiming: "Claiming...",
						mastermindPOne: "vDBX can be vested in the",
						mastermindPTwo: "mastermind",
						lastCompounded: "DegenBrains Compounder Vaults auto compounds rewards at least once an hour. Last compounded: %time% ago",
						readyToClaim: "ready to claim",
						stakingWarning: "1% Deposit Fee Applies",
						unstakingWarning: "1% Early Withdrawal Fee Will Apply"
					},
					spanish: {
						poolError: "Error al obtener informaci\xf3n del grupo",
						userError: "Error al obtener la informaci\xf3n del usuario",
						approveSuccess: "Aprobado con \xe9xito",
						approveError: "Error al aprobar",
						zeroStakeErr: "Error: \xa1necesitas apostar m\xe1s de 0!",
						zeroUnstakeErr: "Error: \xa1no puedes dejar de apostar 0!",
						balanceError: "Error: \xa1saldo demasiado bajo!",
						stakeSuccess: "Estacada exitosamente",
						stakeError: "Replanteo de errores",
						unstakeSuccess: "Exitosamente no apostada",
						unstakeError: "Error de eliminaci\xf3n",
						zeroClaimErr: "Error: nada que reclamar!",
						claimSuccess: "Reclamado con \xe9xito",
						claimError: "Error al reclamar",
						loadingFarm: "Cargando por favor espere...",
						staked: "Apostada:",
						rewards: "Recompensas:",
						apr: "ABR:",
						apy: "API:",
						dpr: "DPR:",
						tvl: "TVL:",
						stake: "Apostar",
						staking: "Replanteo...",
						unstake: "Dejar de apostar",
						unstaking: "Desquiciar...",
						approve: "Aprobar",
						approving: "Aprobatoria...",
						balance: "Balance: %balance% %currency%",
						harvest: "Cosecha %dollarAmount%",
						harvesting: "Cosecha...",
						claim: "Reclamar premios",
						claiming: "Reclamando...",
						mastermindPOne: "vDBX se puede conferir a la",
						mastermindPTwo: "cerebro",
						lastCompounded: "DegenBrains Compounder Vaults autocompone recompensas al menos una vez por hora. \xdaltima composici\xf3n: hace %time%",
						readyToClaim: "Listo para reclamar",
						stakingWarning: "Se aplica una tarifa de dep\xf3sito del 1%",
						unstakingWarning: "Se aplicar\xe1 una tarifa de retiro anticipado del 1%"
					}
				},
				common: {
					english: {
						selectToken: "Select a Token",
						settings: "Settings",
						slippage: "Slippage:",
						txnDeadline: "Txn Deadline (mins):",
						warmning: "Warning",
						frontrunMessage: "Slippage is higher than usual your transaction may be frontrun",
						impactMessage: "Price impact is higher than usual, the amount recieved will be less than quoted",
						swapAnyway: "Swap Anyway",
						notConnected: "Please connect your wallet to view this page"
					},
					spanish: {
						selectToken: "Seleccione una ficha",
						settings: "Ajustes",
						slippage: "Deslizamiento:",
						txnDeadline: "Plazo de transacci\xf3n (minutos):",
						warmning: "Advertencia",
						frontrunMessage: "El deslizamiento es m\xe1s alto de lo habitual, es posible que su transacci\xf3n sea anticipada",
						impactMessage: "El impacto en el precio es m\xe1s alto de lo habitual, la cantidad recibida ser\xe1 menor que la cotizada",
						swapAnyway: "Intercambiar de todos modos",
						notConnected: "Conecte su billetera para ver esta p\xe1gina"
					}
				},
				portfolio: {
					english: {
						totalBalance: "Total Balance",
						walletBalance: "Wallet Balance",
						note: "Note: Only whitelisted tokens show here",
						token: "Token",
						amount: "Amount",
						price: "Price",
						usdValue: "USD Value",
						farmsBalance: "Farms Balance",
						pool: "Pool",
						staked: "Staked",
						pendingRewards: "Pending Rewards",
						loading: "Loading please wait...",
						mastermindBalance: "Mastermind Balance",
						searchAddress: "Search address",
						search: "Search"
					},
					spanish: {
						totalBalance: "Saldo total",
						walletBalance: "Saldo de la billetera",
						note: "Nota: Aqu\xed solo se muestran los tokens incluidos en la lista blanca",
						token: "Ficha",
						amount: "Cantidad",
						price: "Precio",
						usdValue: "Valor USD",
						farmsBalance: "Saldo de Granjas",
						pool: "Piscina",
						staked: "Apostado",
						pendingRewards: "Recompensas pendientes",
						loading: "Cargando por favor espere...",
						mastermindBalance: "Equilibrio de la mente maestra",
						searchAddress: "Buscar direcci\xf3n",
						search: "Buscar"
					}
				}
			};
			var g = t.p + "static/media/home-icon.df8f16a5.png",
				h = t.p + "static/media/mint-icon.9a47a150.png",
				j = (t.p, t.p + "static/media/earn-icon.625dd76a.png"),
				f = t.p + "static/media/learn-icon.fed6a64a.png";
			const w = (e, n) => {
				let t = x.header[e];
				return [{
					name: "home",
					display: n ? t.home.toLowerCase() : t.home,
					type: "link",
					linkTo: "/",
					icon: g
				}, {
					name: "trade",
					display: n ? t.trade.toLowerCase() : t.trade,
					type: "dropdown",
					icon: h,
					options: [{
						external: !1,
						name: t.swap,
						linkTo: "/swap"
					}, {
						external: !1,
						name: t.liquidity,
						linkTo: "/liquidity"
					}]
				}, {
					name: "earn",
					display: n ? t.earn.toLowerCase() : t.earn,
					type: "dropdown",
					icon: j,
					options: [{
						external: !1,
						name: t.farms,
						linkTo: "/farms"
					}, {
						external: !1,
						name: t.staking,
						linkTo: "/staking"
					}, {
						external: !1,
						name: t.vaults,
						linkTo: "/vaults"
					}]
				}, {
					name: "play",
					display: n ? t.play.toLowerCase() : t.play,
					type: "dropdown",
					icon: f,
					options: [{
						external: !0,
						name: "Ghouls FPS",
						linkTo: "https://ghoulsfps.degenbrain.finance/"
					}]
				}, {
					name: "other",
					display: n ? t.other.toLowerCase() : t.other,
					type: "dropdown",
					icon: "data:image/png;base64,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",
					options: [{
						external: !1,
						name: t.mastermind,
						linkTo: "/mastermind"
					}, {
						external: !1,
						name: t.portfolio,
						linkTo: "/portfolio"
					}, {
						external: !1,
						name: "NFT Launchpad",
						linkTo: "/nftlaunchpad"
					}, {
						external: !1,
						name: "Gallery",
						linkTo: "/gallery"
					}, {
						external: !0,
						name: "XY Bridge",
						linkTo: "https://app.xy.finance?fromTokenAddress=0x0b257fe969d8782fAcb4ec790682C1d4d3dF1551&sourceChainId=42161&toTokenAddress=0x061E31e7768b39a4282822b65569F8d814dC15f6&targetChainId=25"
					}]
				}]
			};
			var v = t(722),
				O = t(0);

			function T(e) {
				let n, {
						address: t,
						web3Modal: a,
						loadWeb3Modal: i,
						logoutOfWeb3Modal: s
					} = e,
					r = (null === t || void 0 === t ? void 0 : t.substr(0, 4)) + "..." + (null === t || void 0 === t ? void 0 : t.substr(-4));
				return n = null !== a && void 0 !== a && a.cachedProvider ? {
					name: "Disconnect (" + r + ")",
					action: s
				} : {
					name: "Connect Wallet",
					action: i
				}, Object(O.jsx)("div", {
					style: {
						display: "flex"
					},
					children: a && Object(O.jsx)(v.a, {
						style: {
							width: "100%",
							backgroundColor: "black",
							borderRadius: "100px",
							color: "#00cf87",
							fontSize: "17px",
							fontWeight: "bold",
							cursor: "pointer",
							height: "45px",
							border: "1px solid #00cf87"
						},
						shape: "round",
						onClick: n.action,
						children: n.name
					})
				})
			}
			var k, A = t.p + "static/media/logo.80e0170e.gif";
			const B = y.a.div(k || (k = Object(d.a)(['\n  width: 100%;\n\n  .desktop-nav {\n    display: none;\n\n    @media (min-width: 1025px) {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    .logo-price {\n      display: flex;\n      flex-direction: column;\n      margin: 30px 0 0 30px;\n      width: 110px;\n\n      img {\n        width: 80px;\n      }\n\n      p {\n        color: white;\n      }\n    }\n\n    .nav-title-container {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        font-size: 45px;\n        font-family: "Titan One", Sans-serif;\n        font-weight: inherit;\n        color: #00cf87;\n        padding: 0 10px;\n        margin: 0 0 0 -130px;\n      }\n\n      .nav-items {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        width: 100%;\n        padding: 20px 20px 0 0;\n\n        .play-connect {\n          display: flex;\n\n          @media (max-width: 1240px) {\n            flex-direction: column-reverse;\n          }\n\n          .play-button {\n            height: 30px;\n            width: 150px;\n            background: #00cf87;\n            color: black;\n            border-radius: 30px;\n            font-size: 17px;\n            font-weight: bold;\n            padding: 8px 0;\n            cursor: pointer;\n            height: 45px;\n            border: none;\n            margin-right: 10px;\n\n            @media (max-width: 1240px) {\n              width: 100%;\n              margin-top: 5px;\n            }\n          }\n        }\n\n        ul {\n          display: flex;\n          align-items: center;\n          font-weight: 700;\n\n          li {\n            display: inline;\n            padding: 10px 10px;\n            display: flex;\n            align-items: center;\n            text-decoration: none;\n\n            a {\n              color: #00cf87;\n              font-size: 17px;\n\n              &:hover {\n                color: white;\n              }\n            }\n\n            .dropInner {\n              display: flex;\n              align-items: flex-end;\n              margin: 0;\n              color: #00cf87;\n              font-size: 17px;\n\n              &:hover {\n                color: white;\n              }\n            }\n\n            .down-symbol {\n              font-size: 10px;\n              padding: 3px;\n            }\n          }\n\n          select {\n            height: 30px;\n            border-radius: 10px;\n            border: 1px solid #00cf87;\n            background: black;\n            color: #00cf87;\n            font-weight: 900;\n            width: 100px;\n          }\n\n          .nav-item-dropdown {\n            display: flex;\n            flex-direction: column;\n            position: relative;\n            z-index: 5;\n\n            &:hover {\n              .dropdown-menu {\n                display: flex;\n              }\n            }\n\n            .dropdown-menu {\n              display: none;\n              flex-direction: column;\n              position: absolute;\n              top: 40px;\n              width: 200px;\n              background: black;\n              border-left: 1px solid #00cf87;\n              border-right: 1px solid #00cf87;\n              border-bottom: 1px solid #00cf87;\n              border-radius: 0 0 10px 10px;\n\n              a {\n                color: white;\n\n                &:hover {\n                  color: #00cf87;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .mobile-nav {\n    z-index: 100;\n    display: none;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 60px;\n    background: #0d0d0d;\n    border-radius: 5px 5px 0 0;\n    border-top: 2px solid #00cf87;\n    justify-content: space-around;\n    align-items: center;\n\n    @media (max-width: 1024px) {\n      display: flex;\n    }\n\n    .mobile-price-info {\n      position: fixed;\n      left: 0;\n      top: 0;\n      right: 0;\n      height: 30px;\n      background: black;\n      border-bottom: 1px solid #00cf87;\n      border-radius: 0 0 5px 5px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0 10px;\n\n      img {\n        height: 25px;\n        width: 25px;\n      }\n\n      .dbf-price {\n        display: flex;\n        align-items: center;\n        height: 100%;\n\n        p {\n          color: #00cf87;\n          margin: 0;\n\n          &:first-child {\n            color: lightgrey;\n            margin-right: 10px;\n          }\n        }\n      }\n    }\n\n    .mobile-nav-icon {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      height: 100%;\n      justify-content: space-evenly;\n\n      img {\n        width: 25px;\n        height: auto;\n      }\n\n      p {\n        color: white;\n        margin: 0;\n        font-size: 10px;\n      }\n    }\n\n    .small-icon {\n      margin-top: 8px;\n    }\n  }\n\n  .mobile-nav-popover {\n    z-index: 100;\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 59px;\n    border: 1px solid #00cf87;\n    border-radius: 5px;\n    background: #0d0d0d;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    select {\n      height: 40px;\n      border-radius: 10px;\n      border: 1px solid #00cf87;\n      background: black;\n      color: #00cf87;\n      font-weight: 900;\n      font-size: 20px;\n      width: 100px;\n      margin: 20px 0;\n    }\n\n    a {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 55px;\n      width: 80%;\n      color: #00cf87;\n      font-size: 22px;\n\n      &:not(:last-child) {\n        border-bottom: 1px solid #00cf87;\n      }\n    }\n\n    .connect {\n      width: 50%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 20px;\n\n      button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 0;\n      }\n\n      button > span {\n        display: flex;\n        margin: 0 10px;\n        font-size: 20px;\n\n        @media (max-width: 531px) {\n          font-size: 13px;\n          margin: 0 5px;\n        }\n      }\n\n      a {\n        font-size: 20px;\n        @media (max-width: 531px) {\n          font-size: 13px;\n        }\n      }\n    }\n  }\n'])));

			function M(e) {
				let {
					language: n,
					setLanguage: t,
					pageTitle: a,
					address: i,
					contract: s,
					web3Modal: o,
					loadWeb3Modal: l,
					logoutOfWeb3Modal: c,
					networkOptions: d,
					selectedNetwork: u,
					setSelectedNetwork: m,
					prices: y
				} = e;
				const [g, h] = Object(r.useState)(!1), [j, f] = Object(r.useState)(""), v = {
					home: "home",
					ico: "ico",
					trade: "trade",
					earn: "earn",
					other: "other"
				}, k = x.header[n], M = e => {
					j !== e ? (f(e), h(!0)) : (f(""), h(!1))
				};
				Object(r.useEffect)((() => {
					f(""), h(!1)
				}), [a, s]);
				const C = e => {
					t(e.target.value)
				};
				return Object(O.jsxs)(B, {
					children: [Object(O.jsxs)("div", {
						className: "desktop-nav",
						children: [Object(O.jsxs)("div", {
							className: "logo-price",
							children: [Object(O.jsx)(b.a, {
								to: "/",
								children: Object(O.jsx)("img", {
									alt: "degen-brain-logo",
									src: A
								})
							}), Object(O.jsxs)("p", {
								children: [k.dbxPrice, " $", y.DBX]
							})]
						}), Object(O.jsxs)("div", {
							className: "nav-title-container",
							children: [Object(O.jsxs)("div", {
								className: "nav-items",
								children: [Object(O.jsxs)("ul", {
									children: [w(n, !1).map((e => "dropdown" !== e.type ? Object(O.jsx)("li", {
										children: Object(O.jsx)(b.a, {
											to: e.linkTo,
											children: e.display
										})
									}, "".concat(e.name, "-nav-item")) : Object(O.jsxs)("li", {
										className: "nav-item-dropdown",
										children: [Object(O.jsxs)("div", {
											className: "dropInner",
											children: [e.display, " ", Object(O.jsx)("div", {
												className: "down-symbol",
												children: "v"
											})]
										}), Object(O.jsx)("div", {
											className: "dropdown-menu",
											children: e.options.map((e => e.external ? Object(O.jsx)("a", {
												rel: "noreferrer",
												target: "_blank",
												href: e.linkTo,
												children: e.name
											}, "".concat(e.name, "-nav-item")) : Object(O.jsx)(b.a, {
												to: e.linkTo,
												children: e.name
											}, "".concat(e.name, "-nav-item"))))
										})]
									}, "".concat(e.display, "-nav-item")))), Object(O.jsxs)("select", {
										value: n,
										onChange: C,
										children: [Object(O.jsx)("option", {
											value: "english",
											children: "English"
										}), Object(O.jsx)("option", {
											value: "spanish",
											children: "Spanish"
										})]
									})]
								}), Object(O.jsx)("div", {
									className: "play-connect",
									children: Object(O.jsx)(T, {
										address: i,
										web3Modal: o,
										loadWeb3Modal: l,
										logoutOfWeb3Modal: c
									})
								})]
							}), Object(O.jsx)("h1", {
								children: a
							})]
						})]
					}), Object(O.jsxs)("div", {
						className: "mobile-nav",
						children: [Object(O.jsxs)("div", {
							className: "mobile-price-info",
							children: [Object(O.jsx)("img", {
								alt: "degen-brain-logo",
								src: A
							}), Object(O.jsxs)("div", {
								className: "dbf-price",
								children: [Object(O.jsx)("p", {
									children: k.dbxPrice
								}), Object(O.jsxs)("p", {
									children: ["$", y.DBX]
								})]
							})]
						}), w(n, !0).map(((e, n) => "link" === e.type ? Object(O.jsx)(p.b, {
							to: e.linkTo,
							children: Object(O.jsxs)("div", {
								className: "mobile-nav-icon",
								children: [Object(O.jsx)("img", {
									src: e.icon,
									alt: n + "-icon"
								}), Object(O.jsx)("p", {
									children: e.display
								})]
							})
						}, "".concat(e.display, "-nav-item")) : "other" !== e.name ? Object(O.jsxs)("div", {
							onClick: () => M(v[e.name.toLowerCase()]),
							className: "mobile-nav-icon",
							children: [Object(O.jsx)("img", {
								src: e.icon,
								alt: n + "-icon"
							}), Object(O.jsx)("p", {
								children: e.display.toLowerCase()
							})]
						}, "".concat(e.display, "-nav-item")) : Object(O.jsxs)("div", {
							onClick: () => M(v[e.name.toLowerCase()]),
							className: "mobile-nav-icon small-icon",
							children: [Object(O.jsx)("img", {
								src: e.icon,
								alt: n + "-icon"
							}), Object(O.jsx)("p", {
								children: e.display.toLowerCase()
							})]
						}, "".concat(e.display, "-nav-item")))), g && Object(O.jsx)("div", {
							className: "mobile-nav-popover",
							children: (() => {
								let e = w(n, !0).find((e => e.name === j)).name,
									t = w(n, !0).find((e => e.name === j)).options,
									a = "other" === j,
									s = t.map((n => "Raffle" !== n.name && "buy" === e ? Object(O.jsx)("a", {
										href: n.linkTo,
										children: n.name
									}) : Object(O.jsx)(b.a, {
										to: n.linkTo,
										children: n.name
									})));
								return a ? [...s, Object(O.jsxs)("select", {
									value: n,
									onChange: C,
									children: [Object(O.jsx)("option", {
										value: "english",
										children: "English"
									}), Object(O.jsx)("option", {
										value: "spanish",
										children: "Spanish"
									})]
								}), Object(O.jsx)("div", {
									className: "connect",
									children: Object(O.jsx)(T, {
										address: i,
										web3Modal: o,
										loadWeb3Modal: l,
										logoutOfWeb3Modal: c
									})
								})] : s
							})()
						})]
					})]
				})
			}
			var C, D = "data:image/png;base64,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",
				N = "data:image/png;base64,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",
				S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAU4UlEQVR4nO2d67OV1X3HP1suGi+JiUZQo3hJYrygpE3jFUEEATVpp1Hb6Uxedfqm/Qf6J/Rd37TTaZ1Om4wz6WS0apSLICAIKBIRrJYkIiIQg3dQvII8ffE9q3uf4zmHs/de67mt72fmDDOcs9fz7Gc/n/1bz1rr91udoigwxrSbU6o+AWNMeiy6MRlg0Y3JAItuTAZYdGMywKIbkwEW3ZgMsOjGZIBFNyYDLLoxGWDRjckAi25MBlh0YzLAohuTARbdmAyw6MZkgEU3JgMsujEZYNGNyQCLbkwGWHRjMsCiG5MBFt2YDLDoxmSARTcmAyy6MRlg0Y3JAItuTAZYdGMywKIbkwEW3ZgMsOjGZIBFNyYDLLoxGWDRjckAi25MBlh0YzLAohuTARbdmAyw6MZkgEU3JgMsujEZYNGNyQCLbkwGWHRjMmB6jEY6O/8hRjOmfnTQPTITmDHO748BnwPHgaLE88qOYt7fD/X6KKKb1tEBvgFcCfwxMA+4ArgA+ArwBfAu8BKwfeRn98j/WfgaYtFNLx3gIuBmYBlwE3AxiuadMX97PnAN8BPg98BW4AngaWAfFr5WWHQDkngOcAuwfOTfC+mO4YyVPFCge2gO+kJYCGwGVgCbgNex8LXAoudNB/gOEnQZcCNwHl2xJxKcCX5/PorwN6DIvhKJfwALXykWPU86wLeR4HciMc9DEbzg5IJP1CYjbVwE/CUwH4kehN+Pha8Ei54XHeAyJPhd6Bn8mz2/6/13mGOAhL+Y8YV3l75kLHoehAg+Hz2D34S62cNKfbJjhn8vAu4bOe5mYBWwBQtfGha93QTBb6U7ij6btIKPdw6gCD8H+BbdCL965N99WPikWPR20gEuR4LfiQbZZjPcM3iMc4Jul/4v0Oj+FrrCv4aFT4JFbw8d4HTgUjQPvoQvCx7+rkrC8ach4S9Ewm8F1gLPoC79x1j6aFj05tMBvoYWrywY+bkOOJfRuQxVCz4RYZT+XnTuO9Ec/GbgZeB9LPzQWPRm0wF+ANwBLAauBc6mWclKvYN2s9FYwp+gQcOngA3Ai8B7WPiBsejNJCx0uQ24G/ghmgdvMr09jnPQgN1cYBGwEQm/C3gHC983Fr1Z9I6iL0fP4KmnyarkbDTecC3qtWwC1gPPA29i4aeMRW8GY6fJguBN6qIPw5noEeUaYCkSfg3wHPAHLPxJsej1ZqzgN9AdRW9rFB+PDpL5NOBqdE0WoPX0a4FtKIPOwk+ARa8n4Rl8Aeqi965FD7/Pjd73fCpwFRL+NjQXvxZN0Xk9/ThY9HoxVvDr6UZw82VmAt+lu37/GeBJJPzrwGdYesCi14XxIvgsRi90MRMzHS0UuhiN0u9CI/VPobn4D8n8Olr0aplM8N6/MVNjGuoBzUJTjsvRKP06NBf/AZkKb9GrIaxFX0B3LfpYwc3gdICvo7n4eWikPgi/kwxX21n0cukVPKSLlp1NlhtnoZ7StSgHv3dq7m0yEd6il0OYJlvE6FF0C14ep6McgKvoLq9dCTwLHKLlwlv0tIQIvghFkxtRsokFr44Z6Ev3EjQ1twmlyW4B3qClwlv0NFjw+jMdfUaXoOW1W1CE30QLC2FY9LiEmmyLULKJBa8/01BO/D108+JXoVV3+9FONI2X3qLHIUTwhYwuumjBm8MpaCean6DP8Xm02i5MzZ2o7MwiYNGHY7yqqh5kazYd1AtbgrajWoye4Z8C9tDQyjcWfTDGCn4jiuDTKjwnE5dTkPDL0Hz8bpQT/ySwg4btM2fR+6ODllouRAtdQgS34O3mDJQmOxdNzW1A+8z9GniLBghv0adGEPxWul30WVjw3JiJcuKvQF37jUj4bdQ8L96iT07oooeyyWVsfGDqS/jcZwDfQ/PxS+jOxW8FDlJD4S36+Iy3VHUWFtyMZjoKBHPo7iS7BkX4A8Cn1ER6iz6a3gi+HNUr612LbtHNeExDC29CmuwOuiWrfwMcpmLhLbro3ZtsvJpsFtxMhTAXfwG6h+6imxdfacnq3EXv3T44VFXtZ39wYybiHPTo932UJhtKVr9ABSP1uYo+Xtlkd9FNCs5CJcHmIuE3o7n4UivY5iZ6B9UYC4KHii4W3KQiVLDtTZNdjAph/AqlyR4hsfA5iD5288E7GF022ZjUhABSoKm5K9B+c1cBDwCPkngHmraLHvYmux3lHl+Hlqq66KKpgt4e4+noGX4aknwlypRLQltF792b7EeoUOA3x/kbY6rmFlS1dhsJK920TfTeZ/CltH9vMtMOrkNjRe8Ax1IcoC2ihwgeBtmuJ6+9yUyzmT3y8zss+rgEwReiCN47iu4obprCmWitfDKaKnrooi9EySbX0y3ZZMlNkyhQ7zMpTRO9N4KPNw9uTNMo5fGyKaL3jqLfiQR3TTbTZEq9d+suem8ED4K7JptpMpXcu3UVvTeCe2cT0wYqvXfrJnrv1kXuops2UIt7ty6ij93ZxIKbplOre7dq0YPgt+GdTUw7qOW9W5XovXXR78Y7m5jmU+t7t2zRO3R3sbwLpY16kM00ndrfv2WJ3kF1tBYAP0Zr0nsruhjTRBpz/5YhegeJfS8qvHgpTjYxzaYxggdSi94B/gz4ayT7Wbjgg2kujRM8kFL0DnAf8LdoNH1Gz/8b0yQaf8+mEr0D/Dnwd2hE3V1100QaL3gghegdtB/V36BI7o0ITdNojeCB2KJ3UP3qn6JdT6pekGNMP7RO8EBsEb+KFsAsQVUujWkCrRU8EFP0DjAPVV2dFbFdY1LResEDMQfJTkWRfG7ENo1JRTaSQ9yIPgctbT0jYpvGxCYrwQOxRO+g1NJrBnztRHhxjYlBlnL3Ekv0GWgd+1l9vu5kH0DvnlXG9EtqwYe5LxtZM+50tO1RPyc/yN9aeDMV6iz42DZKET6W6Oeh9NPUWHgzGU0QfLw2k8sea9T9QuC0Pv5+2DfmTRpML2XcDymDS/LAFUv0eRHb6gcLnzdlff5l9CCTHiOWnFdTrXAWPj/K+rzLfExMdqxYog8yrZYCy95+yvxSr2IsKMkxY4l+TqR2YuDo3k7K/lyrHPCNfuxYon8lUjsxsfDtINfPMarssabX6lxYwlNyzaRKuVt3r8QStAnfuLlGhqZR9edUJ8mjnUusiH4iUjtl4AhfT/wlnJBYEf3TSO2USdWRwwh/DpOzL0YjsSL6h5HaqQJH+Gqoo9zD3gMpMjHPG/B1o4gV0ZssesCRpTzaeJ2nmonZL6cO+LpRxBJ9P+2JiG28CetCW79Mp/qeBnnvpwD/OMDrvtRIDPbSHtGhvTdkVbT5evb7vga5Dt8d4DWjiPWMfpB2iR7w8/twtFXusrlg2AZiRfQ9wOeR2qojbY5IKfD1istXh20gluh/AN5g6pGvqRHSN/Dk+PqkYeiedyzRDwE7I7XVBHxDj8bXIy1Hh20glujvA1vob4VcU6N6L7nf4Lm//0EY5L4/MuxBY4leAM8C70Zqr2nkeMPn9n4nInXAKtCs1lDEzDp7BdjV52vaENV7yeHmz/FL7WSkHJs6Afx2gNeNIqboR4DNtHv0fSp0aJ8MbXxPsTmZxIMGtY+B3QO+9v+JKfpxYBP9L8JvW1TvpQ1itOE9TIVYtdon+hmUvcD/DntiMUUvgP9BUf0E7Ra4H5oYDZt4zsNQ13v1OPLpwLANxa4M8x6wBs2r93OT1PVCx6bu8tT9/GIzbLRNzX7gSWo0vRYogK3A0/RfjKLOFzw2dROqbueTmroLDhrr2oBms4Y+1xS13g4CK9C3Ub/U/eLHpmrBqj5+2TRB8MBu4DHgzRiNpRC9QINy69G3Ur8XtikfREzKFs6C15tDwCNoEVqU805VvfUA+jbajW6oQWRv0gcTi9QCWvB6UwAfAKuAh4m4AC2V6OFZ/THgrSHbadIHFYsUMuYkODTvvinQnPka4GfAi0R8Dynrsb8NPIoGFIZdRJOj8LGir6P48O2VwYcokv8revSNetyUohfA88Av6X9p7GRtWvi0r2sqKe+N1O0eAh4C/glYl+J4sSrMTEQYmLsc7c92OXE2fi9l8/iaMZVqN7ldE0gn4Qm0HmQbSsGeDtwA/AA4mzhfpMeAl1HP9xEid9d7SS06aEDhUeBc4K+ACyO1Gy5Ibjd3bu93IlL27A6htSArGL2s+4fAXcAytFX46QO2fwx4HT3WPgY8gzxJ9p7KEL1AmW0PjBzvPuBbkdsHC5ALKWQIbR5BEfxhYC3w2pjjPYcyydYBi4BbkfDfAKZN4Xw/QWvXn0aDbtvQl0ryx9EyRAe9kZeA/0Trd+8BLktwDLDwbSaVEJ+jqeBVqPf53ATHKoDDKMo/B/wcuBKYC1wFfBs4HzgDjX8dQ0VZ9o20/yIar3oVDb6VNt5UlujQlf3f0Zu/B12gGcSV08K3j1RCHEdRex3qQm9D+RpTSTkN0Xkfiv5jI/rY++/4yE8lCV9lig7dbvz9qAt0H3AbMCvRscDCN5mUA2370TPy42gF2lsDHK8Avhj5qTVliw66OO+iUcY9qDtzN3Ad6vKkOB5Y+CaRUvA3UNf7cfSs/PuEx6sNVYgeCF35/WjUcRmwGD3zDDqaebLjgYWvMynnqw+h3O4VwEY06t16wQNVig660EfQhd+FRiKXAbcD3yOd8Ja9XqQaSe+gwbNtaJBtLRoIy0bwQNWiBwo0QLcBCf8ksBxF+O8QaUfJMccDC18HUkn3CRrpfgJ106PkdTeVuogeCM/va9FqpHVI+NvQqrqZCY4HFr4KUkn3Kd257lVoGfbhhMdrBHUTPVCgUdAV6INai7r0C9D8u4VvLinnwl9Fj4Er0Tz3ICPpraSuogcKtN74UWA76tIvQyuSLkFz8LGPBxY+BSnnwvehkfRVaGC3n30As6DuogcKNA3yEBpYuQFYCsxntPCxBLXw8Ug5VXYQTZGtQiPq+xMer9E0RfRAgarXHETC34Qi/C3AHOK/Hws/OCmFexsNrv0KDeDuTXy8xtM00QMF+vY+gD7wm+kKfxETJxgMczyw8FMhtnC906FH0N4Ba4DVwK8THK+VNFX0QIGez15HXbeb0Sj9fJQhN4248+aeg5+c2JVdQs73UbRbyTq6MzKHIx+v1TRd9ECBZA+r7OYj4W9G+e9tSZoZ5sZOeb4phOsweqrsCWAHifO220pbRA8UKBtpH4rw81GXPggfewuqQGrpY9zYKb6gUk+VbUADbdvxVNlQtE30QIEGaF5Dwi8EfoRG65uUKZeyyMKg55pStjBVFgR/lpIKM7SdtooeKFBk2Iue65YCd6BMubMTHQ/iCJ/65h5kvCHlVNkBuuWbNpNJVllZtF30QIGe7/aghRWLUOLMtdRT+LJu8KnKnmokvUCLW0JW2dNkllVWFrmIDt1MuS2o8uZGlDSzGLgGODPRMaHeO8tOJnuqc+mgSi4hq2wdmWaVlUVOogdCptwmNCe7HliCIvzVqPhF7Gm0qQpf1Y0+9v2mPI+P0HVfTXegzYInJkfRAwWKKk+hKjfr0PP77aQtflHXefjUsn2GpsrWIsl3oC9cS14COYseCKmx64EX0HztUhTlrwROI/6iG8Zpr603/HHULV9HN6vsHdr7fmuJRe8SInwofrGe0cUvZpJO+Dbe9KEA41Oo8MNWPFVWGRb9y4QIvwZ1L9ei3TkWoVz4GaQRvi1kW4Cxzlj0iSlQltRKNGC0mq7wlxI/cabJFEjwt9FU2eMokjtttCZY9JMTqt08hp4v16Dy1AtJkynXRI6ia/Mwuj57sOC1wqJPnVAy+L/R0sxbUIRfgDLlUm5BPRGTPT6UIdqnqADjavRFmHUBxjpj0fsnVLv5JRpgmo+Ev5X4mXKTcbLjpBzkO4ZG0teiFW3b8VRZrbHogxOq3fwCPZcuAv4UZcqdS1e0FOJPtc1Ysoc2ercyCtv9OqusAVj04QnVbn6GKp4sQdNyf4S20616kUws2d9Ay4YfQyPpLsDYICx6PAq0hn4vEuJ2lAv/feDrEY9T9pfGe+gR5WG06MUj6Q3EoselAD5GK+x+hyLfYrS09lrga9WdWl8UaEXbCyiCr0Bpvha8oVj0NBRoymkbGpXeiLr0i9Ge8Cky5WKzHfhnNF3m8k0Nx6KnJaTGbkYZW+tQd/4OlBobe8eZGBQoAWU98CAaYbfkDceil0OBqpaG1NitwE+BO+l/T/gyBvc+QBHdkrcEi14uIXHmceALYDZaeAPp5O1X1A7KLvPqthZRxWouI4E2ovnoY6Sr3TaoqAfQKkDTEix6dXyMRuXfHvD1J5N4UMmPoWnCowO+3tQQi14dBfDSyM+gUk70umG63O+jhT/HhmjD1AyLXi3vogG6j4ZooxjnZ5i2duM589Zh0avlOMrbfrni8wgcRmMHr1d8HiYyFr1aCjTdtgqNxld9LttRzbxPKj4XExmLXj1H0XTbJhThq+oyHwQeQRlp7ra3DItePWEXmf9CA3NVZLp9hCL5Gix5K/GCmXpQoCWnl6Etoi4p8djHUG/iFyjzzrQQR/T68A4qU/Ug3aqpqaPrcbQO/9/Q4h1H85biiF4fCpTa+nPUfb8HmJPweJ+hBTv/gvY/s+QtxqLXi7CI5n40Cn8PynILn9Owz+8hIeZ99KjwH6ictSVvORa9foTIfj/wCnAvqjR7Xs/vB1kb30Fd9VeQ3A+hfHlLngEWvZ6EzSMeRGLuQHns19Hdz32yHVp75e2gTLn9aDHMCrR19JtY8myw6PWmQPvAvYq62vNRWel5KMV1OqrM2un5gW5ByI9Q72AzKnqxHe9/liUWvf4UwIdI0p3AA8DlqCTVVWhKbjbdAhZvAvvQmvVdwG9G/u8zLHi2WPTmUACfI2nfQuLPQJ/h2Ih+HIntCjEGgE5R+D4wpu14wYwxGWDRjckAi25MBlh0YzLAohuTARbdmAyw6MZkgEU3JgMsujEZYNGNyQCLbkwGWHRjMsCiG5MBFt2YDLDoxmSARTcmAyy6MRlg0Y3JAItuTAZYdGMywKIbkwEW3ZgMsOjGZIBFNyYDLLoxGWDRjckAi25MBlh0YzLAohuTARbdmAyw6MZkgEU3JgMsujEZYNGNyQCLbkwGWHRjMsCiG5MBFt2YDLDoxmSARTcmAyy6MRlg0Y3JAItuTAZYdGMy4P8A71CFhTu2+5sAAAAASUVORK5CYII=",
				E = "data:image/png;base64,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";
			const I = y.a.div(C || (C = Object(d.a)(["\n  border-top: 2px solid #00cf87;\n  color: rgb(224, 191, 184);\n  font-size: 16px;\n  width: 95%;\n  margin: 0 auto;\n\tmargin-top: 50px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 1;\n\n  @media (max-width: 1024px) {\n    margin-bottom: 50px;\n  }\n\n  .inner-footer {\n    p {\n      margin: 0;\n    }\n  }\n\n  .footer-icons {\n    display: flex;\n    position: absolute;\n    right: 0;\n    top: 5px;\n\n    @media (max-width: 935px) {\n      position: relative;\n    }\n\n    .discord,\n    .twitter,\n    .gitbook,\n    .litepaper,\n    .medium {\n      border: 3px solid #00cf87;\n      padding: 5px;\n      border-radius: 50%;\n      display: flex;\n      width: max-content;\n      height: fit-content;\n      color: #e0bfb8;\n      margin: 0 5px;\n\n      &:hover {\n        cursor: pointer;\n      }\n\n      img {\n        width: 20px;\n      }\n    }\n  }\n"])));

			function R(e) {
				return Object(O.jsxs)(I, {
					children: [Object(O.jsxs)("div", {
						className: "inner-footer",
						children: [Object(O.jsxs)("p", {
							children: ["\xa9 ", x.footer[e.language].footer]
						}), Object(O.jsxs)("p", {
							children: [x.footer[e.language].madeWith, " \ud83e\udde0 ", x.footer[e.language].by]
						})]
					}), Object(O.jsxs)("div", {
						className: "footer-icons",
						children: [Object(O.jsx)("a", {
							href: "https://discord.gg/degenbrains",
							target: "_blank",
							rel: "noreferrer",
							children: Object(O.jsx)("span", {
								className: "discord",
								children: Object(O.jsx)("img", {
									alt: "discord",
									src: D
								})
							})
						}), Object(O.jsx)("a", {
							href: "https://twitter.com/DbxFinance",
							target: "_blank",
							rel: "noreferrer",
							children: Object(O.jsx)("span", {
								className: "twitter",
								children: Object(O.jsx)("img", {
									alt: "twitter",
									src: N
								})
							})
						}), Object(O.jsx)("a", {
							href: "https://medium.com/@degenbrains",
							target: "_blank",
							rel: "noreferrer",
							children: Object(O.jsx)("span", {
								className: "medium",
								children: Object(O.jsx)("img", {
									alt: "medium",
									src: E
								})
							})
						}), Object(O.jsx)("a", {
							href: "https://degen-brain-exchange-dbx.gitbook.io/degen-brain-exchange-dbx/",
							target: "_blank",
							rel: "noreferrer",
							children: Object(O.jsx)("span", {
								className: "gitbook",
								children: Object(O.jsx)("img", {
									alt: "gitbook",
									src: S
								})
							})
						})]
					}), Object(O.jsx)("br", {})]
				})
			}
			var F = t.p + "static/media/Galaxy.859d42ad.png",
				P = t.p + "static/media/RoboBrain.f5dd9e59.gif",
				L = t(720);
			const W = {
					arbitrum: {
						name: "arbitrum",
						chainId: 42161,
						rpcUrl: "https://arb1.arbitrum.io/rpc/"
					}
				},
				X = e => {
					for (const n in W)
						if (W[n].chainId === e) return W[n]
				};
			var H = function(e) {
					let {
						localChainId: n,
						selectedChainId: t,
						targetNetwork: a,
						logoutOfWeb3Modal: i
					} = e, s = "";
					if (n && t && n !== t) {
						X(t);
						const e = X(n);
						s = Object(O.jsx)("div", {
							style: {
								zIndex: 2,
								position: "absolute",
								right: "50%",
								top: "50%",
								transform: "translate(50%, -50%)",
								boxShadow: "0px 0px 10px #e0bfb8",
								fontWeight: "bold"
							},
							children: Object(O.jsx)(L.a, {
								message: "\u26a0\ufe0f Wrong Network",
								description: Object(O.jsxs)("div", {
									children: ["You have the wrong network selected, you need to be on", " ", Object(O.jsx)(v.a, {
										onClick: async() => {
											const e = window.ethereum,
												n = [{
													chainId: "0x" + a.chainId.toString(16),
													chainName: a.name,
													nativeCurrency: a.nativeCurrency,
													rpcUrls: [a.rpcUrl],
													blockExplorerUrls: [a.blockExplorer]
												}];
											let t;
											try {
												t = await e.request({
													method: "wallet_switchEthereumChain",
													params: [{
														chainId: n[0].chainId
													}]
												})
											} catch (i) {
												try {
													t = await e.request({
														method: "wallet_addEthereumChain",
														params: n
													})
												} catch (s) {}
											}
											t && console.log(t)
										},
										children: Object(O.jsx)("b", {
											children: e && e.name
										})
									})]
								}),
								type: "error",
								closable: !1
							})
						})
					}
					return s
				},
				z = t(144),
				Q = t.n(z),
				U = t(380),
				q = t(371),
				V = t(372);
			var Y = e => new q.SafeAppWeb3Modal({
					network: e,
					cacheProvider: !0,
					theme: "dark",
					providerOptions: {
						walletconnect: {
							package: U.a,
							options: {
								rpc: {
									42161: "https://arb1.arbitrum.io/rpc/"
								}
							}
						},
						"custom-deficonnect": {
							display: {
								name: "Crypto.com DeFi Wallet",
								description: "Connect to Crypto.com DeFi Wallet",
								logo: "https://crypto.com/defi/swap/favicon.c5a5b109.png"
							},
							package: V.a,
							options: {
								rpcUrls: {
									42161: "https://arb1.arbitrum.io/rpc/"
								}
							},
							connector: async(e, n) => {
								const t = new e(n);
								return await t.enable(), t
							}
						}
					}
				}),
				K = t(33);
			const G = async e => {
				const n = new K.ethers.providers.StaticJsonRpcProvider(e);
				return await n.ready, n
			};
			var Z = t.p + "static/media/drbrain.678871c2.png";
			const {
				ethers: J
			} = t(33), _ = {
				42161: [{
					gas: "ETH",
					wrapped: "WETH",
					tokens: [{
						name: "Slinky",
						address: "0xF832cA45a6316F0a4447b861f36De8FFa2B06D82",
						decimals: 6,
						tax: 1
					}, {
						name: "USDC",
						address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
						decimals: 6,
						tax: 0
					}, {
						name: "WBTC",
						address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
						decimals: 8,
						tax: 0
					}, {
						name: "ETH",
						address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
						decimals: 18,
						tax: 0
					}, {
						name: "WETH",
						address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
						decimals: 18,
						tax: 0
					}, {
						name: "USDT",
						address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
						decimals: 6,
						tax: 0
					}, {
						name: "ARB",
						address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
						decimals: 18,
						tax: 0
					}, {
						name: "DBC",
						address: "0x745f63CA36E0cfDFAc4bf0AFe07120dC7e1E0042",
						decimals: 18,
						tax: 0
					}, {
						name: "CGLD",
						address: "0x0D702eBDef2C47eb33951098DB4f06bd8CCA8105",
						decimals: 18,
						tax: 0
					}, {
						name: "DBF",
						address: "0xa17a3Ea8B0065A2D28D625f739c017d206B19907",
						decimals: 18,
						tax: 0
					}]
				}],
				8453: [{
					gas: "ETH",
					wrapped: "WETH",
					tokens: [{
						name: "DBX",
						address: "0xBeaC229a3226c05C7675b8A54d0fcFDdB6619100",
						decimals: 18,
						tax: 0
					}, {
						name: "ETH",
						address: "0x4200000000000000000000000000000000000006",
						decimals: 18,
						tax: 0
					}, {
						name: "WETH",
						address: "0x4200000000000000000000000000000000000006",
						decimals: 18,
						tax: 0
					}, {
						name: "DBC",
						address: "0x315CB7C73350De9DC864d4F518A52548665b5eeb",
						decimals: 18,
						tax: 0
					}, {
						name: "USDbC",
						address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
						decimals: 6,
						tax: 0
					}, {
						name: "USDT",
						address: "0xfe668A3d6f05e7799AAE04659fC274AC00d094c0",
						decimals: 6,
						tax: 0
					}, {
						name: "DEER",
						address: "0x0EF5930e9d794d540B7204Cb88799ABb317395A0",
						decimals: 18,
						tax: 0
					}, {
						name: "DSHARE",
						address: "0x5C7610f2f9D415D96C1225e143f2b18B3413a751",
						decimals: 18,
						tax: 0
					}]
				}],
				25: [{
					gas: "CRO",
					wrapped: "WCRO",
					tokens: [{
						name: "DBX",
						address: "0x061E31e7768b39a4282822b65569F8d814dC15f6",
						decimals: 18,
						tax: 0
					}, {
						name: "USDC",
						address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
						decimals: 6,
						tax: 0
					}, {
						name: "CRO",
						address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
						decimals: 18,
						tax: 0
					}, {
						name: "WCRO",
						address: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
						decimals: 18,
						tax: 0
					}, {
						name: "DBC",
						address: "0x730B05d100EeFb92f04016C6c0cF6f2bBB2C3A57",
						decimals: 18,
						tax: 0
					}, {
						name: "WETH",
						address: "0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",
						decimals: 18,
						tax: 0
					}]
				}]
			}, $ = ["function decimals() public view returns (uint8)", "function balanceOf(address account) external view returns (uint256)", "function allowance(address owner, address spender) external view returns (uint256)"], ee = async(e, n, t, a, i) => {
				try {
					const e = new J.Contract(a, $, n).connect(n).balanceOf,
						r = await e(t);
					var s = parseInt(r._hex) / 10 ** i;
					if (isNaN(s)) return 0;
					return Math.floor(1e18 * s) / 1e18
				} catch (r) {
					return console.log(r), 0
				}
			}, ne = async(e, n, t, a, i, s) => {
				try {
					const e = new J.Contract(a, $, n).connect(n).allowance,
						o = await e(t, s);
					var r = parseInt(o._hex) / 10 ** i;
					return isNaN(r) ? 0 : r
				} catch (o) {
					return console.log(o), 0
				}
			}, te = async(e, n) => {
				var t = await e.getBalance(),
					a = parseInt(t._hex) / 10 ** n;
				if (isNaN(a)) return 0;
				return Math.floor(1e18 * a) / 1e18
			};
			var ae;
			const ie = y.a.div(ae || (ae = Object(d.a)(["\n  width: 100%;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .overview {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 80%;\n    max-width: 1250px;\n    padding-bottom: 50px;\n\n    .dr-brain-img {\n      width: 80%;\n      max-width: 324px;\n    }\n\n    h1 {\n      color: white;\n      text-shadow: 3px 3px 0px black;\n      font-size: 25px;\n      font-weight: bold;\n      text-align: center;\n    }\n\n    h2 {\n      color: #00cf87;\n      text-shadow: 3px 3px 0px black;\n      margin-bottom: 25px;\n      font-weight: bold;\n      text-align: center;\n    }\n\n    .buttons {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n\n      button {\n        background: rgba(0, 0, 0, 0.9);\n        border-radius: 20px;\n        border: none;\n        color: white;\n        font-weight: 900;\n        font-size: 14px;\n        margin: 10px;\n        width: 220px;\n        padding: 8px 5px;\n        cursor: pointer;\n        box-shadow: 0px 0px 10px #e0bfb8;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        img {\n          width: 22px;\n          margin-right: 5px;\n        }\n      }\n    }\n  }\n\n  .values {\n    display: flex;\n    justify-content: space-evenly;\n    text-shadow: 2px 2px 0px black;\n\n    @media (max-width: 425px) {\n      flex-direction: column;\n    }\n\n    .value-group {\n      padding: 0 20px;\n\n      h1 {\n        color: white;\n        text-shadow: 3px 3px 0px black;\n        font-size: 25px;\n        font-weight: bold;\n        text-align: center;\n        margin: 0;\n      }\n\n      h2 {\n        color: #00cf87;\n        text-shadow: 3px 3px 0px black;\n        margin-bottom: 25px;\n        font-weight: bold;\n        text-align: center;\n        font-size: 30px;\n      }\n    }\n  }\n"])));
			var se, re = function(e) {
				let {
					language: n,
					chainId: t,
					tokens: a
				} = e;
				const i = x.home[n],
					[s, o] = Object(r.useState)(null),
					p = Object(m.f)();
				return Object(r.useEffect)((() => {
					a.length > 0 && (async() => {
						var e = 0,
							n = 0,
							t = 0;
						a.map((async a => {
							"DBX" === a.name && (e = parseInt(a.totalSupply)), t += parseInt(a.liquidity), n += parseInt(a.locked)
						})), o({
							liquidity: t,
							tvl: n,
							dbxSupply: e
						})
					})()
				}), [a]), Object(O.jsxs)(ie, {
					children: [Object(O.jsxs)("div", {
						className: "overview",
						children: [Object(O.jsx)("img", {
							className: "dr-brain-img",
							alt: "drbrain",
							src: Z
						}), Object(O.jsx)("h1", {
							children: i.title
						}), Object(O.jsx)("h2", {
							children: i.subtitle
						}), Object(O.jsxs)("div", {
							className: "buttons",
							children: [Object(O.jsx)("button", {
								onClick: () => p.push("/swap"),
								children: i.tradeNow
							}), Object(O.jsxs)("button", {
								onClick: async() => {
									var e;
									_[t][0].tokens.map((n => {
										"DBX" === n.name && (e = n.address)
									}));
									try {
										await ethereum.request({
											method: "wallet_watchAsset",
											params: {
												type: "ERC20",
												options: {
													address: e,
													symbol: "DBX",
													decimals: 18,
													image: "https://www.dbx.finance/images/tokenImages/DBX.svg"
												}
											}
										})
									} catch (n) {
										console.log(n)
									}
								},
								children: [Object(O.jsx)("img", {
									alt: "dbxToken",
									src: "/images/tokenImages/DBX.svg"
								}), "Add DBX To MetaMask"]
							})]
						})]
					}), Object(O.jsxs)("div", {
						className: "values",
						children: [Object(O.jsxs)("div", {
							className: "value-group",
							children: [Object(O.jsx)("h1", {
								children: "Total DEX Liquidity"
							}), Object(O.jsxs)("h2", {
								children: ["$", null === s ? "-" : (Math.floor(s.liquidity) / 1e6).toFixed(2), "M"]
							})]
						}), Object(O.jsxs)("div", {
							className: "value-group",
							children: [Object(O.jsx)("h1", {
								children: "Total Liquidity Locked"
							}), Object(O.jsxs)("h2", {
								children: ["$", null === s ? "-" : (Math.floor(s.tvl) / 1e6).toFixed(2), "M"]
							})]
						}), Object(O.jsxs)("div", {
							className: "value-group",
							children: [Object(O.jsx)("h1", {
								children: "DBX Total Supply"
							}), Object(O.jsxs)("h2", {
								children: [null === s ? "-" : (Math.floor(s.dbxSupply) / 1e6).toFixed(2), "M"]
							})]
						})]
					})]
				})
			};
			const oe = y.a.h2(se || (se = Object(d.a)(['\n  font-size: 45px;\n  font-family: "Titan One", Sans-serif;\n  font-weight: inherit;\n  color: #00cf87;\n  padding: 0 10px;\n  line-height: 45px;\n\n  @media (min-width: 1025px) {\n    display: none;\n  }\n\n  @media (max-width: 425px) {\n    font-size: 30px;\n    line-height: 35px;\n  }\n'])));
			var pe, le = e => {
				let {
					title: n
				} = e;
				return Object(O.jsx)(oe, {
					style: {
						color: "#00cf87"
					},
					children: n
				})
			};
			const ce = y.a.div(pe || (pe = Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 0;\n\n  @media (max-width: 1024px) {\n    padding-top: 50px;\n  }\n"])));
			var de, ue = function(e) {
					return Object(r.useEffect)((() => {
						e.setPageTitle("")
					}), []), Object(O.jsx)(ce, {
						children: Object(O.jsx)(re, { ...e
						})
					})
				},
				me = t(29);
			t(215);
			const ye = y.a.button(de || (de = Object(d.a)(["\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin: ", ";\n  width: ", ";\n  padding: ", ";\n  cursor: pointer;\n  box-shadow: ", ";\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"])), (e => e.background), (e => e.borderRadius), (e => e.border), (e => e.color), (e => e.fontWeight), (e => e.fontSize), (e => e.margin), (e => e.width), (e => e.padding), (e => e.boxShadow), (e => e.hoverBackground), (e => e.hoverColor));

			function be(e) {
				let {
					width: n = "auto",
					height: t = "35px",
					padding: a = "0",
					margin: i = "10px",
					fontSize: s = "16px",
					fontWeight: r = "900",
					text: o = "",
					color: p = "black",
					background: l = "#00cf87",
					border: c = "none",
					borderRadius: d = "5px",
					hoverBackground: u = "#e0bfb8",
					hoverColor: m = "black",
					boxShadow: y = "0px 0px 10px #e0bfb8",
					onclick: b = (() => {})
				} = e;
				return Object(O.jsx)(ye, {
					width: n,
					height: t,
					padding: a,
					margin: i,
					fontSize: s,
					fontWeight: r,
					color: p,
					background: l,
					border: c,
					borderRadius: d,
					boxShadow: y,
					hoverBackground: u,
					hoverColor: m,
					onClick: b,
					children: o
				})
			}
			var xe;
			const ge = y.a.div(xe || (xe = Object(d.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .slippage-content {\n    width: 300px;\n    height: 400px;\n    background: black;\n    padding: 0 20px;\n    border-radius: 10px;\n    border: 1px solid #00cf87;\n\n    .slippage-modal-top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      height: 15%;\n\n      p {\n        margin: 0;\n      }\n    }\n\n    .slippage-input {\n      p {\n        margin: 0;\n      }\n\n      input {\n        color: black;\n        text-align: center;\n        width: 20%;\n        border-radius: 5px;\n        border: none;\n        font-weight: 900;\n        font-size: 16px;\n        margin: 10px;\n        padding: 0;\n        cursor: pointer;\n        box-shadow: 0px 0px 10px #e0bfb8;\n      }\n    }\n\n    .deadline-input {\n      margin-top: 20px;\n\n      p {\n        margin: 0;\n      }\n\n      input {\n        color: black;\n        border-radius: 10px;\n        text-align: center;\n      }\n    }\n  }\n"])));
			var he, je = e => {
				let {
					close: n,
					setSlippage: t,
					slippage: a,
					setTxnDeadline: i,
					txnDeadline: s,
					language: r
				} = e;
				const o = x.common[r];
				return Object(O.jsx)(ge, {
					children: Object(O.jsxs)("div", {
						className: "slippage-content",
						children: [Object(O.jsxs)("div", {
							className: "slippage-modal-top",
							children: [Object(O.jsx)("p", {
								children: o.settings
							}), Object(O.jsx)(be, {
								margin: "0",
								text: "x",
								width: "30px",
								height: "30px",
								borderRadius: "50%",
								onclick: n
							})]
						}), Object(O.jsxs)("div", {
							className: "slippage-input",
							children: [Object(O.jsx)("p", {
								children: o.slippage
							}), Object(O.jsxs)("div", {
								className: "slippage-buttons",
								children: [Object(O.jsx)(be, {
									background: .1 === a ? "#00cf87" : "black",
									color: .1 === a ? "black" : "white",
									width: "17%",
									height: "28px",
									margin: "9px",
									text: "0.1%",
									onclick: () => t(.1)
								}), Object(O.jsx)(be, {
									background: .5 === a ? "#00cf87" : "black",
									color: .5 === a ? "black" : "white",
									width: "17%",
									height: "28px",
									margin: "9px",
									text: "0.5%",
									onclick: () => t(.5)
								}), Object(O.jsx)(be, {
									background: 1 === a ? "#00cf87" : "black",
									color: 1 === a ? "black" : "white",
									width: "17%",
									height: "28px",
									margin: "9px",
									text: "1%",
									onclick: () => t(1)
								}), Object(O.jsx)("input", {
									value: a,
									onChange: e => {
										t(parseFloat(e.target.value))
									},
									type: "number"
								})]
							})]
						}), Object(O.jsxs)("div", {
							className: "deadline-input",
							children: [Object(O.jsx)("p", {
								children: o.txnDeadline
							}), Object(O.jsx)("input", {
								value: s,
								onChange: e => {
									i(parseInt(e.target.value))
								},
								type: "number"
							})]
						})]
					})
				})
			};
			const fe = y.a.div(he || (he = Object(d.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .warning-content {\n    width: 300px;\n    background: black;\n    padding: 20px;\n    border-radius: 10px;\n    border: 1px solid #00cf87;\n\n    .warning-modal-top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      height: 15%;\n      margin-bottom: 20px;\n\n      p {\n        margin: 0;\n      }\n    }\n  }\n"])));
			var we, ve = e => {
				let {
					close: n,
					swap: t,
					slippage: a,
					language: i
				} = e;
				const s = x.common[i];
				return Object(O.jsx)(fe, {
					children: Object(O.jsxs)("div", {
						className: "warning-content",
						children: [Object(O.jsxs)("div", {
							className: "warning-modal-top",
							children: [Object(O.jsx)("p", {
								children: s.warning
							}), Object(O.jsx)(be, {
								margin: "0",
								text: "x",
								width: "30px",
								height: "30px",
								borderRadius: "50%",
								onclick: n
							})]
						}), Object(O.jsxs)("div", {
							className: "warning-input",
							children: [Object(O.jsx)("p", {
								children: a > 5 ? s.frontrunMessage : s.impactMessage
							}), Object(O.jsx)("div", {
								className: "warning-buttons",
								children: Object(O.jsx)(be, {
									background: "#00cf87",
									color: "black",
									width: "50%",
									text: s.swapAnyway,
									onclick: () => t()
								})
							})]
						})]
					})
				})
			};
			const {
				ethers: Oe
			} = t(33), Te = y.a.div(we || (we = Object(d.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .token-select-content {\n    width: 300px;\n    height: 400px;\n    background: black;\n    padding: 0 20px;\n    border-radius: 10px;\n    border: 1px solid #00cf87;\n\n    input {\n      color: black;\n      border-radius: 10px;\n      margin-bottom: 10px;\n      width: 100%;\n    }\n\n    .token-select-modal-top {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      height: 15%;\n\n      p {\n        margin: 0;\n      }\n    }\n\n    .all-tokens {\n      height: 70%;\n      overflow: auto;\n      \n      .ind-token {\n        display: flex;\n        align-content: center;\n        justify-content: space-between;\n        align-items: baseline;\n        border-radius: 10px;\n        border-bottom: 1px solid #00cf87;\n        padding: 0px 10px;\n\n        .token-group {\n          width: 100%;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: 5px;\n          color: white;\n          cursor: pointer;\n\n          &:hover {\n            color: lightgray;\n          }\n\n          p {\n            margin: 0;\n          }\n        }\n      }\n    }\n  }\n"])));
			var ke, Ae = e => {
				let {
					close: n,
					tokens: t,
					selectedToken: a,
					tokenOne: i,
					tokenTwo: s,
					changeToken: o,
					balances: p,
					language: l,
					signer: c,
					getBalances: d,
					getAllowances: u,
					importedTokens: m
				} = e;
				const [y, b] = Object(r.useState)(""), [g, h] = Object(r.useState)([...t, ...m]), j = x.common[l], f = ["function name() public view returns (string)", "function symbol() public view returns (string)", "function decimals() public view returns (uint8)"];
				Object(r.useEffect)((() => {
					var e = [...t, ...m];
					if ("" === y) h(e);
					else {
						let n = e.filter((e => e.name.toLowerCase().includes(y.toLowerCase())));
						h(n)
					}
				}), [y]);
				const w = e => 1 === a ? i.name === e : s.name === e,
					v = g.sort(((e, n) => p[n.name] - p[e.name]));
				return Object(O.jsx)(Te, {
					children: Object(O.jsxs)("div", {
						className: "token-select-content",
						children: [Object(O.jsxs)("div", {
							className: "token-select-modal-top",
							children: [Object(O.jsx)("p", {
								children: j.selectToken
							}), Object(O.jsx)(be, {
								margin: "0",
								text: "import",
								height: "30px",
								borderRadius: "10px",
								onclick: async() => {
									var e = y;
									try {
										const s = new Oe.Contract(e, f, c),
											r = s.connect(c).symbol,
											p = await r();
										var n = [...t, ...m].some((e => p === e.name));
										console.log(n);
										const l = s.connect(c).decimals,
											y = await l();
										var i = {
											name: p,
											address: e,
											decimals: y,
											tax: 0
										};
										o(a, i), n || (m.push(i), localStorage.setItem("imported", JSON.stringify(m))), d(), u()
									} catch {}
								},
								padding: "3px"
							}), Object(O.jsx)(be, {
								margin: "0",
								text: "x",
								width: "30px",
								height: "30px",
								borderRadius: "50%",
								onclick: n,
								padding: "0 0 3px 0"
							})]
						}), Object(O.jsx)("input", {
							value: y,
							type: "text",
							placeholder: "Search or import tokens",
							onChange: e => b(e.target.value)
						}), Object(O.jsx)("div", {
							className: "all-tokens",
							children: v.map((e => Object(O.jsxs)("div", {
								className: "ind-token",
								style: {
									background: w(e.name) ? "#00cf87" : "none"
								},
								children: [m.some((n => e.name === n.name)) && Object(O.jsx)(be, {
									margin: "0",
									text: "x",
									width: "10px",
									height: "10px",
									borderRadius: "50%",
									onclick: () => (async e => {
										const n = m.filter((n => n.name !== e));
										m.splice(m.indexOf(e), 1);
										var a = [...t, ...n];
										h(a), localStorage.setItem("imported", JSON.stringify(m))
									})(e.name),
									padding: "0 0 2px 0",
									background: "none",
									color: "red",
									hoverBackground: "none",
									hoverColor: "white",
									boxShadow: "none"
								}), Object(O.jsxs)("div", {
									className: "token-group",
									onClick: () => o(a, e),
									children: [Object(O.jsx)("p", {
										children: e.name
									}), Object(O.jsx)("p", {
										children: Number(p[e.name]).toFixed(18).replace(/\.?0+$/, "")
									})]
								})]
							}, e.name)))
						})]
					})
				})
			};

			function Be(e) {
				let {
					address: n,
					web3Modal: t,
					loadWeb3Modal: a,
					logoutOfWeb3Modal: i,
					language: s
				} = e;
				const r = x.common[s];
				return Object(O.jsxs)("div", {
					className: "connect-container",
					children: [Object(O.jsx)("h2", {
						style: {
							color: "#00cf87"
						},
						children: r.notConnected
					}), Object(O.jsx)(T, {
						address: n,
						web3Modal: t,
						loadWeb3Modal: a,
						logoutOfWeb3Modal: i
					})]
				})
			}
			const {
				ethers: Me
			} = t(33), Ce = y.a.div(ke || (ke = Object(d.a)(["\n  width: 100%;\n  max-width: 1300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 0;\n  padding: 0 50px 0;\n\n  @media (max-width: 1024px) {\n    padding-top: 50px;\n  }\n\n\t.token-select-modal{\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tbackground: rgba(0,0,0,0.8);\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\n\t\t.token-select-content{\n\t\t\twidth: 300px;\n\t\t\theight: 400px;\n\t\t\tbackground: black;\n\t\t\tpadding: 0 20px;\n\t\t\tborder-radius: 10px;\n\t\t\tborder: 1px solid #00cf87;\n\n      input{\n        color: black;\n        border-radius: 10px;\n        margin-bottom: 10px;\n      }\n\n\t\t\t.token-select-modal-top{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 15%;\n\n\t\t\t\tp{\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.all-tokens{\n\t\t\t\theight: 85%;\n\t\t\t\toverflow: auto;\n\n\t\t\t\t.token-group{\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tpadding: 5px;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t\tborder-bottom: 1px solid #00cf87;\n\t\t\t\t\tcursor: pointer;\n\n\t\t\t\t\t&:hover{\n\t\t\t\t\t\tcolor: #00cf87;\n\t\t\t\t\t}\n\n\t\t\t\t\tp{\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n  .slippage-modal{\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tbackground: rgba(0,0,0,0.8);\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n    z-index: 10;\n\n\t\t.slippage-content{\n\t\t\twidth: 300px;\n\t\t\theight: 400px;\n\t\t\tbackground: black;\n\t\t\tpadding: 0 20px;\n\t\t\tborder-radius: 10px;\n\t\t\tborder: 1px solid #00cf87;\n\n\t\t\t.slippage-modal-top{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 15%;\n\n\t\t\t\tp{\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n  .swap-chart {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n\n    .swap-component {\n      width: 400px;\n      background: rgba(0,0,0, 0.92);\n\t\t\tborder-radius: 10px;\n\t\t\tbox-shadow: 0px 0px 10px #e0bfb8;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n      padding: 40px;\n\n      .swap-header{\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        border-bottom: 1px solid #e0bfb8;\n        padding-bottom: 20px;\n        margin-bottom: 10px;\n\n        p{\n          font-size: 20px;\n          margin: 0;\n        }\n      }\n\n\t\t\t.swap-row{\n\t\t\t\tdisplay: flex;\n\t\t\t\tmargin: 15px 0;\n\t\t\t\talign-items: flex-end;\n\t\t\t\twidth: 100%;\n        justify-content: space-between;\n\n\t\t\t\t.token-select-button-group{\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: flex-start;\n\n\t\t\t\t\tp{\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\t\tcolor: lightgrey;\n\t\t\t\t\t}\n\n\t\t\t\t\tbutton{\n\t\t\t\t\t\tcolor: #00cf87;\n\t\t\t\t\t\twidth: 100px;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\theight: 35px;\n\t\t\t\t\t\tbackground: none;\n\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\tfont-weight: 900;\n            cursor: pointer;\n\n            img{\n              width: 35px;\n              height: 35px;\n              margin-right: 3px;\n            }\n\n\t\t\t\t\t\tspan{\n\t\t\t\t\t\t\tfont-size: 12px;\n              margin-right: 3px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.token-select-input-group{\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: flex-end;\n\t\t\t\t\tmargin-left: 20px;\n          width: 100%;\n\n\t\t\t\t\tp{\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\t\tcolor: lightgrey;\n\t\t\t\t\t}\n\n\t\t\t\t\tinput{\n\t\t\t\t\t\theight: 35px;\n\t\t\t\t\t\tcolor: lightgrey;\n\t\t\t\t\t\tborder-radius: 20px;\n\t\t\t\t\t\ttext-align: center;\n            width: 100%;\n            background: rgba(0,0,0,0.6);\n\t\t\t\t\t\t&::-webkit-outer-spin-button,\n\t\t\t\t\t\t&::-webkit-inner-spin-button {\n\t\t\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n       .swap-info{\n        width: 100%;\n        border: 1px solid #e0bfb8;\n        border-radius: 10px;\n        padding: 5px;\n\n          .info-group{\n            width: 100%;\n            display: flex;\n            justify-content: space-between;\n\n            p{\n              margin: 0;\n              font-size: 12px;\n            }\n          }\n        }\n    }\n\n    .chart-component {\n      width: 47%;\n      height: 400px;\n      background: rgba(0,0,0, 0.7);\n\t\t\tborder-radius: 10px;\n\t\t\t  box-shadow: 0px 0px 10px #e0bfb8;\n    }\n  }\n\n  .swap-data {\n    width: 100%;\n    height: 400px;\n    background: rgba(0,0,0, 0.7);\n\t\tmargin: 20px; 0;\n\t\tborder-radius: 10px;\n\t\tbox-shadow: 0px 0px 10px #e0bfb8;\n  }\n"])));
			var De = function(e) {
					let {
						web3Modal: n,
						loadWeb3Modal: t,
						logoutOfWeb3Modal: a,
						setPageTitle: i,
						language: s,
						address: o,
						contract: p,
						signer: l,
						chainId: c
					} = e;
					const d = JSON.parse(localStorage.getItem("imported")) || [],
						u = _[c][0].tokens,
						[m, y] = Object(r.useState)(u[0]),
						[b, g] = Object(r.useState)(u[1]),
						[h, j] = Object(r.useState)(0),
						f = Object(r.useRef)(h),
						[w, v] = Object(r.useState)(0),
						[T, k] = Object(r.useState)(0),
						[A, B] = Object(r.useState)(""),
						[M, C] = Object(r.useState)(0),
						[D, N] = Object(r.useState)(!1),
						[S, E] = Object(r.useState)(!1),
						[I, R] = Object(r.useState)(1),
						F = Object(r.useRef)(m),
						P = Object(r.useRef)(b),
						[L, W] = Object(r.useState)(!1),
						[X, H] = Object(r.useState)(!1),
						[z, Q] = Object(r.useState)(localStorage.getItem("slippage") || 1),
						[U, q] = Object(r.useState)({}),
						[V, Y] = Object(r.useState)({}),
						[K, G] = Object(r.useState)(localStorage.getItem("txnDeadline") || 10),
						[Z, J] = Object(r.useState)(!1),
						[$, ae] = Object(r.useState)(!1),
						[ie, se] = Object(r.useState)(!1),
						re = x.swap[s],
						oe = m.name === _[c][0].gas && b.name === _[c][0].wrapped,
						pe = m.name === _[c][0].wrapped && b.name === _[c][0].gas,
						ce = oe ? $ ? re.wrapping : re.wrap : pe ? $ ? re.unwrapping : re.unwrap : $ ? re.swapping : re.swap,
						de = e => me.b.warn(e, {
							position: "top-right",
							autoClose: 5e3,
							hideProgressBar: !1,
							closeOnClick: !0,
							pauseOnHover: !0,
							draggable: !0,
							progress: void 0
						}),
						ue = e => me.b.success(e, {
							position: "top-right",
							autoClose: 5e3,
							hideProgressBar: !1,
							closeOnClick: !0,
							pauseOnHover: !0,
							draggable: !0,
							progress: void 0
						});
					Object(r.useEffect)((() => {
						p && l && o && (ye(), xe())
					}), [p, l, o]);
					const ye = () => {
							let e = {};
							if (!ie) {
								se(!0);
								var n = [...u, ...d];
								Promise.all(n.map((async n => {
									n.name === _[c][0].gas ? e[n.name] = await te(l, n.decimals) : e[n.name] = await ee(0, l, o, n.address, n.decimals)
								}))).then((n => {
									se(!1), q(e)
								}))
							}
						},
						xe = async() => {
							if (p.Router) {
								let e = {};
								[...u, ...d].forEach((async n => {
									n.name === _[c][0].gas ? e[n.name] = 1157920892373162e62 : e[n.name] = await ne(0, l, o, n.address, n.decimals, p.Router.address)
								})), Y(e)
							}
						};
					Object(r.useEffect)((() => {
						f.current = h
					}), [h]), Object(r.useEffect)((() => {
						F.current = m
					}), [m]), Object(r.useEffect)((() => {
						P.current = b
					}), [b]);
					const ge = e => {
							N(!0), R(1 === e ? 1 : 2)
						},
						he = async(e, n) => {
							var t, a;
							1 === e ? (a = n * T, j(t = n), v(a)) : (t = n / T, v(a = n), j(t)), fe(), we(t)
						};
					Object(r.useEffect)((() => {
						v(h * T)
					}), [T, h]);
					const fe = async() => {
							let e = F.current.name === _[c][0].gas && P.current.name === _[c][0].wrapped,
								n = F.current.name === _[c][0].wrapped && P.current.name === _[c][0].gas;
							if (e || n) k(1);
							else try {
								const e = p.Factory.connect(l).getPair,
									n = await e(F.current.address, P.current.address);
								if (B(n), "0x0000000000000000000000000000000000000000" === n) k(null);
								else try {
									var t = f.current;
									0 === t && (t = 1);
									const e = p.Router.connect(l).getAmountsOut,
										n = await e(BigInt(t * 10 ** F.current.decimals).toString(), [F.current.address, P.current.address]);
									var a = parseInt(n[1]._hex) / 10 ** P.current.decimals;
									k(a /= t)
								} catch (i) {
									console.log(i)
								}
							} catch (i) {
								console.log(i)
							}
						},
						we = async e => {
							if (C(0), F.current.name === _[c][0].gas && P.current.name === _[c][0].wrapped || F.current.name === _[c][0].wrapped && P.current.name === _[c][0].gas) C(0);
							else try {
								var n = await ee(0, l, A, F.current.address, F.current.decimals);
								n = parseFloat(n);
								var t = 100 - 100 * (1 - e / (parseFloat(e) + n));
								C(t)
							} catch (a) {
								console.log(a)
							}
						},
						Oe = async() => {
							ae(!0);
							var e = Math.floor(h * 10 ** m.decimals),
								n = Math.floor(w * ((100 - z) / 100) * 10 ** b.decimals);
							n -= n * (m.tax / 100);
							var t = [m.address, b.address],
								a = Math.floor((new Date).getTime() / 1e3) + K;
							m.name === _[c][0].gas ? b.name === _[c][0].wrapped ? (async e => {
								try {
									const n = p.WETH.connect(l).deposit,
										t = await n({
											value: BigInt(e).toString()
										});
									await t.wait(), ye(), ae(!1), ue(re.wrapSuccess)
								} catch (n) {
									console.log(n.reason), ae(!1), de(n.reason)
								}
							})(e) : (async(e, n, t, a, i) => {
								try {
									if (p) {
										const s = p.Router.connect(l).swapExactETHForTokens,
											r = await s(BigInt(n).toString(), t, a, i, {
												value: BigInt(e).toString()
											});
										await r.wait(), ye(), ae(!1), ue(re.swapSuccess)
									}
								} catch (s) {
									console.log(s.reason), ae(!1), de(s.reason)
								}
							})(e, n, t, o, a) : b.name === _[c][0].gas ? m.name === _[c][0].wrapped ? (async e => {
								try {
									const n = p.WETH.connect(l).withdraw,
										t = await n(BigInt(e).toString());
									await t.wait(), ye(), ae(!1), ue(re.unwrapSuccess)
								} catch (n) {
									console.log(n.reason), ae(!1), de(n.reason)
								}
							})(e) : m.tax > 0 ? (async(e, n, t, a, i) => {
								try {
									const s = p.Router.connect(l).swapExactTokensForETHSupportingFeeOnTransferTokens,
										r = await s(BigInt(e).toString(), BigInt(n).toString(), t, a, i);
									await r.wait(), ye(), ae(!1), ue(re.swapSuccess)
								} catch (s) {
									console.log(s.reason), ae(!1), de(s.reason)
								}
							})(e, n, t, o, a) : (async(e, n, t, a, i) => {
								try {
									const s = p.Router.connect(l).swapExactTokensForETH,
										r = await s(BigInt(e).toString(), BigInt(n).toString(), t, a, i);
									await r.wait(), ye(), ae(!1), ue(re.swapSuccess)
								} catch (s) {
									console.log(s.reason), ae(!1), de(s.reason)
								}
							})(e, n, t, o, a) : m.tax > 0 ? (async(e, n, t, a, i) => {
								try {
									const s = p.Router.connect(l).swapExactTokensForTokensSupportingFeeOnTransferTokens,
										r = await s(BigInt(e).toString(), BigInt(n).toString(), t, a, i);
									await r.wait(), ye(), ae(!1), ue(re.swapSuccess)
								} catch (s) {
									console.log(s.reason), ae(!1), de(s.reason)
								}
							})(e, n, t, o, a) : (async(e, n, t, a, i) => {
								try {
									const s = p.Router.connect(l).swapExactTokensForTokens,
										r = await s(BigInt(e).toString(), BigInt(n).toString(), t, a, i);
									await r.wait(), ye(), ae(!1), ue(re.swapSuccess)
								} catch (s) {
									console.log(s.reason), ae(!1), de(s.reason)
								}
							})(e, n, t, o, a), E(!1)
						};
					let Te;
					return Object(r.useEffect)((() => {
						i(x.pageTitles[s].swap)
					}), []), Object(r.useEffect)((() => {
						p.Router && p.Factory && !L && (W(!0), Te ? (clearInterval(Te), Te = setInterval((() => {
							fe()
						}), 4e3)) : Te = setInterval((() => {
							fe()
						}), 4e3))
					}), [p]), Object(r.useEffect)((() => {
						p.Router && p.Factory && fe()
					}), [p, m, b]), Object(r.useEffect)((() => {
						localStorage.setItem("slippage", z)
					}), [z]), Object(r.useEffect)((() => {
						localStorage.setItem("txnDeadline", K)
					}), [K]), Object(O.jsxs)(Ce, {
						children: [Object(O.jsx)(le, {
							title: x.pageTitles[s].swap
						}), !n.cachedProvider && Object(O.jsx)(Be, {
							address: o,
							web3Modal: n,
							loadWeb3Modal: t,
							logoutOfWeb3Modal: a,
							language: s
						}), n.cachedProvider && Object(O.jsxs)(O.Fragment, {
							children: [D && Object(O.jsx)(Ae, {
								tokenOne: m,
								tokenTwo: b,
								close: () => N(!1),
								tokens: u,
								selectedToken: I,
								changeToken: (e, n) => {
									1 === e ? b.name === n.name ? (g(m), y(n), N(!1)) : (y(n), N(!1)) : 2 === e && (m.name === n.name ? (y(b), g(n), N(!1)) : (g(n), N(!1))), j(0), v(0), C(0)
								},
								balances: U,
								language: s,
								signer: l,
								getBalances: ye,
								getAllowances: xe,
								importedTokens: d
							}), S && Object(O.jsx)(ve, {
								close: () => E(!1),
								swap: Oe,
								slippage: z,
								language: s
							}), X && Object(O.jsx)(je, {
								setSlippage: Q,
								close: () => H(!1),
								slippage: z,
								txnDeadline: K,
								setTxnDeadline: G,
								language: s
							}), Object(O.jsx)("div", {
								className: "swap-chart",
								children: Object(O.jsxs)("div", {
									className: "swap-component",
									children: [Object(O.jsxs)("div", {
										className: "swap-header",
										children: [Object(O.jsx)("p", {
											children: re.swapTokens
										}), Object(O.jsx)("svg", {
											stroke: "currentColor",
											fill: "currentColor",
											strokeWidth: "0",
											viewBox: "0 0 1024 1024",
											height: "20px",
											width: "20px",
											xmlns: "http://www.w3.org/2000/svg",
											onClick: () => H(!0),
											cursor: "pointer",
											children: Object(O.jsx)("path", {
												d: "M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"
											})
										})]
									}), Object(O.jsxs)("div", {
										className: "swap-row",
										children: [Object(O.jsxs)("div", {
											className: "token-select-button-group",
											children: [Object(O.jsx)("p", {
												className: "button-label",
												children: re.from
											}), Object(O.jsxs)("button", {
												onClick: () => ge(1),
												children: [Object(O.jsx)("img", {
													src: "/images/tokenImages/".concat(m.name, ".svg"),
													onError: e => e.target.src = "/images/tokenImages/NOTFOUND.svg"
												}), Object(O.jsx)("span", {
													children: m.name
												}), Object(O.jsx)("svg", {
													stroke: "currentColor",
													fill: "currentColor",
													strokeWidth: "0",
													viewBox: "0 0 448 512",
													className: "text-lg",
													height: "1em",
													width: "1em",
													xmlns: "http://www.w3.org/2000/svg",
													children: Object(O.jsx)("path", {
														d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
													})
												})]
											})]
										}), Object(O.jsxs)("div", {
											className: "token-select-input-group",
											children: [Object(O.jsx)("p", {
												className: "input-label",
												children: re.balance.replace("%balance%", Number(U[m.name]).toFixed(18).replace(/\.?0+$/, "") || "loading...")
											}), Object(O.jsx)("input", {
												type: "number",
												onChange: e => he(1, e.target.value),
												value: h
											})]
										})]
									}), Object(O.jsxs)("div", {
										children: [Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "25%",
											onclick: () => he(1, .25 * Number(U[m.name]).toFixed(18).replace(/\.?0+$/, ""))
										}), Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "50%",
											onclick: () => he(1, .5 * Number(U[m.name]).toFixed(18).replace(/\.?0+$/, ""))
										}), Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "75%",
											onclick: () => he(1, .75 * Number(U[m.name]).toFixed(18).replace(/\.?0+$/, ""))
										}), Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "100%",
											onclick: () => he(1, Number(U[m.name]).toFixed(18).replace(/\.?0+$/, ""))
										})]
									}), Object(O.jsxs)("svg", {
										stroke: "currentColor",
										fill: "currentColor",
										strokeWidth: "0",
										viewBox: "0 0 24 24",
										className: "text-5xl text-3",
										height: "30px",
										width: "30px",
										xmlns: "http://www.w3.org/2000/svg",
										onClick: () => {
											let e = m;
											y(b), g(e)
										},
										children: [Object(O.jsx)("path", {
											fill: "none",
											d: "M0 0h24v24H0V0z"
										}), Object(O.jsx)("path", {
											d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
										})]
									}), Object(O.jsxs)("div", {
										className: "swap-row",
										children: [Object(O.jsxs)("div", {
											className: "token-select-button-group",
											children: [Object(O.jsx)("p", {
												className: "button-label",
												children: re.to
											}), Object(O.jsxs)("button", {
												onClick: () => ge(2),
												children: [Object(O.jsx)("img", {
													src: "/images/tokenImages/".concat(b.name, ".svg"),
													onError: e => e.target.src = "/images/tokenImages/NOTFOUND.svg"
												}), Object(O.jsx)("span", {
													children: b.name
												}), Object(O.jsx)("svg", {
													stroke: "currentColor",
													fill: "currentColor",
													strokeWidth: "0",
													viewBox: "0 0 448 512",
													className: "text-lg",
													height: "1em",
													width: "1em",
													xmlns: "http://www.w3.org/2000/svg",
													children: Object(O.jsx)("path", {
														d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
													})
												})]
											})]
										}), Object(O.jsxs)("div", {
											className: "token-select-input-group",
											children: [Object(O.jsx)("p", {
												className: "input-label",
												children: re.balance.replace("%balance%", Number(U[b.name]).toFixed(18).replace(/\.?0+$/, "") || "loading...")
											}), Object(O.jsx)("input", {
												type: "number",
												onChange: e => he(2, e.target.value),
												value: w,
												disabled: !0
											})]
										})]
									}), null === T && Object(O.jsx)(be, {
										width: "200px",
										text: re.insufficientLiq,
										background: "grey",
										color: "black",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0"
									}), 0 === T && Object(O.jsx)(be, {
										width: "200px",
										text: "Amount too small",
										background: "grey",
										color: "black",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0"
									}), h > 0 && V[m.name] >= h && T > 0 && U[m.name] < h && Object(O.jsx)(be, {
										width: "200px",
										text: re.insufficientBal,
										background: "grey",
										color: "black",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0"
									}), V[F.current.name] >= h && T > 0 && U[F.current.name] >= h && M < 10 && Object(O.jsx)(be, {
										width: "200px",
										text: ce,
										background: "black",
										color: "#00cf87",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0",
										onclick: () => {
											(async() => {
												z > 5 || M > 5 ? E(!0) : Oe()
											})()
										}
									}), V[F.current.name] >= h && T > 0 && U[F.current.name] >= h && M >= 10 && Object(O.jsx)(be, {
										width: "200px",
										text: re.impactTooHigh,
										background: "grey",
										color: "black",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0"
									}), V[F.current.name] < h && T > 0 && Object(O.jsx)(be, {
										width: "200px",
										text: Z ? re.approving : re.approve + " " + m.name,
										background: "black",
										color: "#00cf87",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0",
										onclick: () => {
											(async e => {
												try {
													J(!0);
													let n = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
													const t = new Me.Contract(e.address, ["function approve(address spender, uint amount) external returns (bool)"], l).connect(l).approve,
														a = await t(p.Router.address, n.toString());
													await a.wait();
													let i = V;
													i[e.name] = n, Y(i), J(!1)
												} catch (n) {
													J(!1), console.log(n)
												}
											})(m)
										}
									}), h > 0 && w > 0 && Object(O.jsxs)("div", {
										className: "swap-info",
										children: [Object(O.jsxs)("div", {
											className: "info-group",
											children: [Object(O.jsx)("p", {
												children: re.price
											}), Object(O.jsx)("p", {
												children: re.perMessage.replace("%amount%", T.toFixed(3)).replace("%tokenTwo%", b.name).replace("%tokenOne%", m.name)
											})]
										}), !oe && !pe && Object(O.jsxs)(O.Fragment, {
											children: [Object(O.jsxs)("div", {
												className: "info-group",
												children: [Object(O.jsx)("p", {
													children: re.priceImpact
												}), Object(O.jsxs)("p", {
													children: [M < .01 ? "<0.01" : M.toFixed(2), "%"]
												})]
											}), Object(O.jsxs)("div", {
												className: "info-group",
												children: [Object(O.jsx)("p", {
													children: re.slippage
												}), Object(O.jsxs)("p", {
													children: [z, "%"]
												})]
											}), Object(O.jsxs)("div", {
												className: "info-group",
												children: [Object(O.jsx)("p", {
													children: re.swapFee
												}), Object(O.jsx)("p", {
													children: "0.3%"
												})]
											}), Object(O.jsxs)("div", {
												className: "info-group",
												children: [Object(O.jsx)("p", {
													children: re.minReceived
												}), Object(O.jsxs)("p", {
													children: [(w - w * (z / 100 + .003) - (w - w * (z / 100 + .003)) * (m.tax / 100)).toFixed(3), " ", b.name]
												})]
											}), m.tax > 0 && Object(O.jsx)("div", {
												className: "info-group",
												children: Object(O.jsx)("p", {
													style: {
														color: "red"
													},
													children: re.taxMessage.replace("%taxAmount%", m.tax)
												})
											})]
										})]
									})]
								})
							}), Object(O.jsx)(me.a, {
								position: "top-right",
								autoClose: 5e3,
								hideProgressBar: !1,
								newestOnTop: !1,
								closeOnClick: !0,
								rtl: !1,
								pauseOnFocusLoss: !0,
								draggable: !0,
								pauseOnHover: !0
							})]
						})]
					})
				},
				Ne = t(165),
				Se = t.n(Ne);
			t(136);
			const Ee = (e, n) => {
					const t = Number("1e".concat(n));
					let a = function(e) {
						let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
						const t = Math.pow(10, n);
						return Math.trunc(e * t) / t
					}(e, n);
					return null === e || void 0 === e ? "-" : 0 === e ? 0 : parseFloat(a) < parseFloat(1 / t) && a > 0 ? "Less than ".concat(1 / t) : a.toFixed(n).replace(/\.?0+$/, "")
				},
				Ie = async(e, n, t, a) => {
					var i, s = Q.a[e].contracts[n].address,
						r = Q.a[e].contracts[n].abi;
					42161 === e && (i = "arbitrum"), 25 === e && (i = "cronos");
					return (await Se.a.post("https://deep-index.moralis.io/api/v2/" + s + "/function?chain=" + i + "&function_name=" + t, {
						abi: r,
						params: a
					}, {
						headers: {
							Accept: "application/json",
							"X-API-Key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijk4MGE3ZDEwLTAxMmEtNGVhZi04MGZlLWI0ODE2ODcwYjAzOSIsIm9yZ0lkIjoiMjkyMDY5IiwidXNlcklkIjoiMjk4NzkyIiwidHlwZUlkIjoiMzQ5MTViODItNzhmZC00ZDc4LWE0YjgtNzg1Mjk5ODBkMDk3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODc4Njk2MzgsImV4cCI6NDg0MzYyOTYzOH0.RUmLSHahPHhvmyYwlPqEQhbeZziHoUAmrb7a1WnDuRs",
							"Content-Type": "application/json"
						}
					})).data
				},
				Re = (e, n) => e.mul("1e".concat(n)).round(0, 3).div("1e".concat(n)).toFixed(n).replace(/(\.[0-9]*[1-9])0+$/, "$1");
			var Fe;
			const Pe = t(136),
				Le = y.a.div(Fe || (Fe = Object(d.a)(["\n  border: 1px solid #00cf87;\n  width: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  margin: 13px 0;\n\n  .all-data {\n    padding: 0 10px;\n\n    .data-row {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      padding: 2px 0;\n\n      &:not(:last-child) {\n        border-bottom: 1px solid rgb(5, 40, 1);\n      }\n\n      p {\n        margin: 0;\n      }\n    }\n  }\n\n  .liquidity-buttons {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .show-more {\n    background: #00cf87;\n    color: black;\n    cursor: pointer;\n\n    p {\n      margin: 0;\n    }\n  }\n"])));
			var We, Xe = function(e) {
				let {
					data: n,
					setFunc: t,
					setTokenToRemove: a,
					setRemovableBalance: i,
					content: s
				} = e;
				const [o, p] = Object(r.useState)(!1), [l, c] = Object(r.useState)(0), d = e => {
					let n = parseInt(e) / 10 ** 18,
						t = Math.floor(1e18 * n) / 1e18;
					return parseFloat(t)
				};
				return Object(r.useEffect)((() => {
					n.userBal._hex && null !== n && void 0 !== n && n.totalSupply._hex && c(d(null === n || void 0 === n ? void 0 : n.userBal._hex) / d(null === n || void 0 === n ? void 0 : n.totalSupply._hex))
				}), [n]), Object(O.jsxs)(Le, {
					children: [Object(O.jsxs)("div", {
						className: "liquidity-title",
						children: [n.token0Symbol, "/", n.token1Symbol]
					}), Object(O.jsxs)("div", {
						className: "all-data",
						children: [Object(O.jsxs)("div", {
							className: "data-row",
							children: [Object(O.jsx)("p", {
								children: s.total
							}), Object(O.jsx)("p", {
								children: Number(d(null === n || void 0 === n ? void 0 : n.userBal._hex)).toFixed(18).replace(/\.?0+$/, "")
							})]
						}), o && Object(O.jsxs)(O.Fragment, {
							children: [Object(O.jsxs)("div", {
								className: "data-row",
								children: [Object(O.jsx)("p", {
									children: s.share
								}), Object(O.jsx)("p", {
									children: 100 * l < 1 ? s.lessThan1 : "".concat((100 * l).toFixed(2), "%")
								})]
							}), Object(O.jsxs)("div", {
								className: "data-row",
								children: [Object(O.jsx)("p", {
									children: s.pooled.replace("%currency%", n.token0Symbol)
								}), Object(O.jsx)("p", {
									children: Re(Pe(n.reserve0).mul(l).div(10 ** n.token0Decimal), parseInt(n.token0Decimal))
								})]
							}), Object(O.jsxs)("div", {
								className: "data-row",
								children: [Object(O.jsx)("p", {
									children: s.pooled.replace("%currency%", n.token1Symbol)
								}), Object(O.jsx)("p", {
									children: Re(Pe(n.reserve1).mul(l).div(10 ** n.token1Decimal), parseInt(n.token1Decimal))
								})]
							}), Object(O.jsxs)("div", {
								className: "liquidity-buttons",
								children: [Object(O.jsx)(be, {
									onclick: () => t("Add"),
									height: "25px",
									fontSize: "13px",
									width: "40%",
									text: s.add
								}), Object(O.jsx)(be, {
									onclick: () => {
										a(n), i(d(null === n || void 0 === n ? void 0 : n.userBal._hex)), t("Remove")
									},
									height: "25px",
									fontSize: "13px",
									width: "40%",
									text: s.remove
								})]
							})]
						})]
					}), Object(O.jsx)("div", {
						onClick: () => p(!o),
						className: "show-more",
						children: Object(O.jsx)("p", {
							children: o ? s.showLess : s.showMore
						})
					})]
				})
			};
			const He = y.a.div(We || (We = Object(d.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e0bfb8;\n  padding-bottom: 20px;\n  margin-bottom: 10px;\n\n  p {\n    font-size: 20px;\n    margin: 0;\n  }\n"])));
			var ze, Qe = function(e) {
				let {
					title: n,
					func: t
				} = e;
				return Object(O.jsxs)(He, {
					children: [Object(O.jsx)("p", {
						children: n
					}), Object(O.jsx)("svg", {
						stroke: "currentColor",
						fill: "currentColor",
						strokeWidth: "0",
						viewBox: "0 0 1024 1024",
						height: "20px",
						width: "20px",
						xmlns: "http://www.w3.org/2000/svg",
						onClick: t,
						cursor: "pointer",
						children: Object(O.jsx)("path", {
							d: "M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"
						})
					})]
				})
			};
			const {
				ethers: Ue
			} = t(33), qe = y.a.div(ze || (ze = Object(d.a)(["\n  width: 400px;\n  height: 500px;\n  background: rgba(0, 0, 0, 0.92);\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px #e0bfb8;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n\n  .remove-component {\n    display: flex;\n    margin: 15px 0;\n    align-items: flex-end;\n    width: 100%;\n    flex-direction: column;\n\n    h4 {\n      align-self: center;\n    }\n\n    .quickBtns {\n      align-self: center;\n    }\n\n    .token-select-input-group {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      margin-left: 20px;\n      width: 100%;\n\n      p {\n        margin: 0;\n        font-size: 10px;\n        color: lightgrey;\n      }\n\n      input {\n        height: 35px;\n        color: lightgrey;\n        border-radius: 20px;\n        text-align: center;\n        width: 100%;\n        background: rgba(0, 0, 0, 0.6);\n        &::-webkit-outer-spin-button,\n        &::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n      }\n    }\n\n    .swapGasWrapped {\n      color: #00cf87;\n      font-weight: bold;\n    }\n  }\n\n  .swap-info {\n    width: 100%;\n    border: 1px solid #e0bfb8;\n    border-radius: 10px;\n    padding: 5px;\n\n    .info-group {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n\n      p {\n        margin: 0;\n        font-size: 12px;\n      }\n    }\n  }\n"])));
			var Ve, Ye = function(e) {
				let {
					language: n,
					address: t,
					contract: a,
					signer: i,
					chainId: s,
					setSlippageModalOpen: o,
					tokenToRemove: p,
					removableBalance: l,
					slippage: c,
					txnDeadline: d,
					notify_warn: u,
					notify_success: m,
					content: y,
					getTokens: b
				} = e;
				const [x, g] = Object(r.useState)(0), [h, j] = Object(r.useState)(p.token0Symbol === _[s][0].wrapped ? _[s][0].gas : p.token0Symbol), [f, w] = Object(r.useState)(p.token1Symbol === _[s][0].wrapped ? _[s][0].gas : p.token1Symbol), [v, T] = Object(r.useState)(0), [k, A] = Object(r.useState)(0), [B, M] = Object(r.useState)(0), [C, D] = Object(r.useState)(!1), [N, S] = Object(r.useState)(!1);
				Object(r.useEffect)((() => {
					for (var e = 0; e < _[s][0].tokens.length; e++) p.token0 === _[s][0].tokens[e].address && T(_[s][0].tokens[e].decimals), p.token1 === _[s][0].tokens[e].address && A(_[s][0].tokens[e].decimals);
					(async() => {
						if (a.Router) {
							var e = await ne(0, i, t, p.pairAddress, 18, a.Router.address);
							M(e)
						}
					})()
				}), [a, i, t]);
				const E = e => {
					if (0 === e) {
						var n = h === _[s][0].wrapped ? _[s][0].gas : _[s][0].wrapped;
						j(n)
					} else {
						var t = f === _[s][0].wrapped ? _[s][0].gas : _[s][0].wrapped;
						w(t)
					}
				};
				return Object(O.jsxs)(qe, {
					children: [Object(O.jsx)(Qe, {
						title: "Remove Liquidity",
						func: () => o(!0)
					}), Object(O.jsxs)("div", {
						className: "remove-component",
						children: [Object(O.jsxs)("h4", {
							children: [h, "/", f]
						}), Object(O.jsxs)("div", {
							className: "token-select-input-group",
							children: [Object(O.jsxs)("p", {
								className: "input-label",
								children: ["Balance:", " ", Number(l).toFixed(18).replace(/\.?0+$/, "")]
							}), Object(O.jsx)("input", {
								type: "number",
								onChange: e => g(e.target.value),
								value: Number(x).toFixed(18).replace(/\.?0+$/, "")
							})]
						}), Object(O.jsxs)("div", {
							className: "swapGasWrapped",
							children: [h === _[s][0].gas && Object(O.jsx)("div", {
								onClick: () => {
									E(0)
								},
								children: "Receive " + _[s][0].wrapped + " instead"
							}), f === _[s][0].gas && Object(O.jsx)("div", {
								onClick: () => {
									E(1)
								},
								children: "Receive " + _[s][0].wrapped + " instead"
							}), h === _[s][0].wrapped && Object(O.jsx)("div", {
								onClick: () => {
									E(0)
								},
								children: "Receive " + _[s][0].gas + " instead"
							}), f === _[s][0].wrapped && Object(O.jsx)("div", {
								onClick: () => {
									E(1)
								},
								children: "Receive " + _[s][0].gas + " instead"
							})]
						}), Object(O.jsxs)("div", {
							className: "quickBtns",
							children: [Object(O.jsx)(be, {
								width: "50px",
								height: "30px",
								text: "25%",
								onclick: () => g(parseFloat(.25 * l))
							}), Object(O.jsx)(be, {
								width: "50px",
								height: "30px",
								text: "50%",
								onclick: () => g(parseFloat(.5 * l))
							}), Object(O.jsx)(be, {
								width: "50px",
								height: "30px",
								text: "75%",
								onclick: () => g(parseFloat(.75 * l))
							}), Object(O.jsx)(be, {
								width: "50px",
								height: "30px",
								text: "100%",
								onclick: () => g(parseFloat(l))
							})]
						}), B >= x && Object(O.jsx)("div", {
							className: "quickBtns",
							children: Object(O.jsx)(be, {
								width: "200px",
								text: C ? "Removing Liquidity..." : "Remove Liquidity",
								background: "black",
								color: "#00cf87",
								borderRadius: "25px",
								height: "50px",
								margin: "15px 0 0 0",
								onclick: () => {
									(async e => {
										if (D(!0), isNaN(v) && isNaN(k)) u("undefined error"), D(!1);
										else {
											var n = p.reserve0 / 10 ** v * (e / (p.totalSupply / 10 ** 18)) * (1 - c / 100),
												r = p.reserve1 / 10 ** k * (e / (p.totalSupply / 10 ** 18)) * (1 - c / 100);
											e = Math.floor(e * 10 ** 18), n = Math.floor(n * 10 ** v), r = Math.floor(r * 10 ** k);
											var o = t,
												l = Math.floor((new Date).getTime() / 1e3) + d;
											try {
												if (h === _[s][0].gas) {
													const t = a.Router.connect(i).removeLiquidityETH,
														s = await t(p.token1, BigInt(e).toString(), BigInt(r).toString(), BigInt(n).toString(), o, l);
													await s.wait()
												} else if (f === _[s][0].gas) {
													const t = a.Router.connect(i).removeLiquidityETH,
														s = await t(p.token0, BigInt(e).toString(), BigInt(n).toString(), BigInt(r).toString(), o, l);
													await s.wait()
												} else {
													const t = a.Router.connect(i).removeLiquidity,
														s = await t(p.token0, p.token1, BigInt(e).toString(), BigInt(n).toString(), BigInt(r).toString(), o, l);
													await s.wait()
												}
												m("Successfully removed liquidity"), D(!1), b()
											} catch (y) {
												console.log(y.reason), u(y.reason), D(!1)
											}
										}
									})(x)
								}
							})
						}), B < x && Object(O.jsx)("div", {
							className: "quickBtns",
							children: Object(O.jsx)(be, {
								width: "200px",
								text: N ? "Approving " + h + "/" + f + "..." : "Approve " + h + "/" + f,
								background: "black",
								color: "#00cf87",
								borderRadius: "25px",
								height: "50px",
								margin: "15px 0 0 0",
								onclick: () => {
									(async() => {
										try {
											S(!0);
											let e = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
											const n = new Ue.Contract(p.pairAddress, ["function approve(address spender, uint amount) external returns (bool)"], i).connect(i).approve,
												t = await n(a.Router.address, e.toString());
											await t.wait(), M(e), S(!1)
										} catch (e) {
											S(!1), console.log(e.reason)
										}
									})()
								}
							})
						})]
					}), Object(O.jsxs)("div", {
						className: "swap-info",
						children: [Object(O.jsxs)("div", {
							className: "info-group",
							children: [Object(O.jsxs)("p", {
								children: ["Min ", h, " received:"]
							}), Object(O.jsx)("p", {
								children: Number(p.reserve0 / 10 ** v * (x / (p.totalSupply / 10 ** 18)) * (1 - c / 100)).toFixed(18).replace(/\.?0+$/, "")
							})]
						}), Object(O.jsxs)("div", {
							className: "info-group",
							children: [Object(O.jsxs)("p", {
								children: ["Min ", f, " received:"]
							}), Object(O.jsx)("p", {
								children: Number(p.reserve1 / 10 ** k * (x / (p.totalSupply / 10 ** 18)) * (1 - c / 100)).toFixed(18).replace(/\.?0+$/, "")
							})]
						})]
					})]
				})
			};
			const {
				ethers: Ke
			} = t(33), Ge = t(136), Ze = "View", Je = "Remove", _e = "Add", $e = y.a.div(Ve || (Ve = Object(d.a)(["\n  width: 100%;\n  max-width: 1300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 0;\n  padding: 0 50px 0;\n\n  @media (max-width: 1024px) {\n    padding-top: 50px;\n  }\n\n  .view-liquidity {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n\n    .view-component {\n      width: 400px;\n      height: 500px;\n      background: rgba(0, 0, 0, 0.92);\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px #e0bfb8;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 40px;\n\n      .view-header {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        border-bottom: 1px solid #e0bfb8;\n        padding-bottom: 20px;\n        margin-bottom: 10px;\n\n        p {\n          font-size: 20px;\n          margin: 0;\n        }\n      }\n\n      .all-liquidity {\n        width: 100%;\n        height: 300px;\n        overflow: auto;\n        border: 1px solid #e0bfb8;\n        padding: 10px;\n        border-radius: 10px;\n\n        ::-webkit-scrollbar {\n          display: none;\n        }\n      }\n    }\n  }\n\n  .add-liquidity {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n\n    .swap-component {\n      width: 400px;\n      height: 500px;\n      background: rgba(0, 0, 0, 0.92);\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px #e0bfb8;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n      padding: 40px;\n\n      .swap-header {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        border-bottom: 1px solid #e0bfb8;\n        padding-bottom: 20px;\n        margin-bottom: 10px;\n\n        p {\n          font-size: 20px;\n          margin: 0;\n        }\n      }\n\n      .all-liquidity {\n        width: 100%;\n        height: 200px;\n        overflow: auto;\n        border: 1px solid #e0bfb8;\n        padding: 10px;\n        border-radius: 10px;\n      }\n\n      .swap-row {\n        display: flex;\n        margin: 15px 0;\n        align-items: flex-end;\n        width: 100%;\n        justify-content: space-between;\n\n        .token-select-button-group {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-start;\n\n          p {\n            margin: 0;\n            font-size: 10px;\n            color: lightgrey;\n          }\n\n          button {\n            color: #00cf87;\n            width: 100px;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            height: 35px;\n            background: none;\n            border: none;\n            font-weight: 900;\n            cursor: pointer;\n\n            img {\n              width: 35px;\n              height: 35px;\n              margin-right: 3px;\n            }\n\n            span {\n              font-size: 12px;\n              margin-right: 3px;\n            }\n          }\n        }\n\n        .token-select-input-group {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n          margin-left: 20px;\n          width: 100%;\n\n          p {\n            margin: 0;\n            font-size: 10px;\n            color: lightgrey;\n          }\n\n          input {\n            height: 35px;\n            color: lightgrey;\n            border-radius: 20px;\n            text-align: center;\n            width: 100%;\n            background: rgba(0, 0, 0, 0.6);\n            &::-webkit-outer-spin-button,\n            &::-webkit-inner-spin-button {\n              -webkit-appearance: none;\n              margin: 0;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .remove-liquidity {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 20px 0;\n\n    .swap-component {\n      width: 400px;\n      height: 500px;\n      background: rgba(0, 0, 0, 0.92);\n      border-radius: 10px;\n      box-shadow: 0px 0px 10px #e0bfb8;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n      padding: 40px;\n\n      .swap-header {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        border-bottom: 1px solid #e0bfb8;\n        padding-bottom: 20px;\n        margin-bottom: 10px;\n\n        p {\n          font-size: 20px;\n          margin: 0;\n        }\n      }\n\n      .swap-row {\n        display: flex;\n        margin: 15px 0;\n        align-items: flex-end;\n        width: 100%;\n        justify-content: space-between;\n\n        .token-select-button-group {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-start;\n\n          p {\n            margin: 0;\n            font-size: 10px;\n            color: lightgrey;\n          }\n\n          button {\n            color: #00cf87;\n            width: 65px;\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            height: 35px;\n            background: none;\n            border: none;\n            font-weight: 900;\n            cursor: pointer;\n\n            span {\n              font-size: 12px;\n            }\n          }\n        }\n\n        .token-select-input-group {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n          margin-left: 20px;\n\n          p {\n            margin: 0;\n            font-size: 10px;\n            color: lightgrey;\n          }\n\n          input {\n            height: 35px;\n            color: lightgrey;\n            border-radius: 20px;\n            text-align: center;\n            width: 250px;\n            background: rgba(0, 0, 0, 0.6);\n            &::-webkit-outer-spin-button,\n            &::-webkit-inner-spin-button {\n              -webkit-appearance: none;\n              margin: 0;\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
			var en, nn = function(e) {
					let {
						web3Modal: n,
						loadWeb3Modal: t,
						logoutOfWeb3Modal: a,
						setPageTitle: i,
						language: s,
						address: o,
						contract: p,
						signer: l,
						chainId: c
					} = e;
					const d = JSON.parse(localStorage.getItem("imported")) || [],
						u = _[c][0].tokens,
						[m, y] = Object(r.useState)([]),
						[b, g] = Object(r.useState)(!0),
						[h, j] = Object(r.useState)(u[0]),
						[f, w] = Object(r.useState)(u[1]),
						[v, T] = Object(r.useState)(0),
						k = Object(r.useRef)(v),
						[A, B] = Object(r.useState)(0),
						[M, C] = Object(r.useState)(0),
						[D, N] = Object(r.useState)(!1),
						[S, E] = Object(r.useState)(1),
						I = Object(r.useRef)(h),
						R = Object(r.useRef)(f),
						[F, P] = Object(r.useState)(!1),
						[L, W] = Object(r.useState)(!1),
						[X, H] = Object(r.useState)("View"),
						[z, Q] = Object(r.useState)({}),
						[U, q] = Object(r.useState)(localStorage.getItem("slippage") || 1),
						[V, Y] = Object(r.useState)({}),
						[K, G] = Object(r.useState)({}),
						[Z, J] = Object(r.useState)(localStorage.getItem("txnDeadline") || 10),
						[$, ae] = Object(r.useState)(0),
						[ie, se] = Object(r.useState)(!1),
						[re, oe] = Object(r.useState)(!1),
						[pe, ce] = Object(r.useState)(!1),
						de = x.lp[s],
						ue = x.pageTitles[s],
						ye = e => me.b.warn(e, {
							position: "top-right",
							autoClose: 5e3,
							hideProgressBar: !1,
							closeOnClick: !0,
							pauseOnHover: !0,
							draggable: !0,
							progress: void 0
						}),
						xe = e => me.b.success(e, {
							position: "top-right",
							autoClose: 5e3,
							hideProgressBar: !1,
							closeOnClick: !0,
							pauseOnHover: !0,
							draggable: !0,
							progress: void 0
						});
					Object(r.useEffect)((() => {
						p && l && o && (ge(), he())
					}), [p, l, o]);
					const ge = async() => {
							let e = {};
							if (!pe) {
								ce(!0);
								var n = [...u, ...d];
								Promise.all(n.map((async n => {
									n.name === _[c][0].gas ? e[n.name] = await te(l, n.decimals) : e[n.name] = await ee(0, l, o, n.address, n.decimals)
								}))).then((n => {
									ce(!1), Y(e)
								}))
							}
						},
						he = async() => {
							if (p.Router) {
								let e = {};
								[...u, ...d].forEach((async n => {
									n.name === _[c][0].gas ? e[n.name] = 1157920892373162e62 : e[n.name] = await ne(0, l, o, n.address, n.decimals, p.Router.address)
								})), G(e)
							}
						};
					Object(r.useEffect)((() => {
						i(ue.liquidity)
					}), []), Object(r.useEffect)((() => {
						k.current = v
					}), [v]), Object(r.useEffect)((() => {
						I.current = h
					}), [h]), Object(r.useEffect)((() => {
						R.current = f
					}), [f]);
					const fe = e => {
							N(!0), E(1 === e ? 1 : 2)
						},
						we = async(e, n) => {
							var t, a;
							Ie ? 1 === e ? T(n) : B(n) : (1 === e ? (a = n * M, T(t = n), B(a)) : (t = n / M, B(a = n), T(t)), ve())
						};
					Object(r.useEffect)((() => {
						B(Number(v * M).toFixed(18).replace(/\.?0+$/, ""))
					}), [M, v]);
					const ve = async() => {
							let e = I.current.name === _[c][0].gas && R.current.name === _[c][0].wrapped,
								n = I.current.name === _[c][0].wrapped && R.current.name === _[c][0].gas;
							if (e || n) C(1);
							else try {
								const e = p.Factory.connect(l).getPair;
								if ("0x0000000000000000000000000000000000000000" === await e(I.current.address, R.current.address)) C(0);
								else try {
									var t = k.current;
									0 === t && (t = 1);
									const e = p.Router.connect(l).getAmountsOut,
										n = await e(Ge(t).mul(Ge(10 ** I.current.decimals)).toString(), [I.current.address, R.current.address]);
									var a = Ge(n[1]).div(Ge(10 ** R.current.decimals));
									a = Ge(a).div(t), C(a)
								} catch (i) {
									console.log(i)
								}
							} catch (i) {
								console.log(i)
							}
						},
						Oe = async() => {
							g(!0);
							try {
								var e = [];
								const c = p.Factory.connect(l).allPairsLength,
									d = await c();
								for (var n = parseInt(d._hex) - 1, t = Math.ceil(n / 250), a = 0; a < t; a++) {
									var i = 250 * a,
										s = 250 * (a + 1) - 1;
									a == t - 1 && (s = n);
									const c = p.MultiCall.connect(l).getPairs,
										d = await c(o, p.Factory.address, i, s);
									for (var r = 0; r < d.length; r++) d[r].userBal > 0 && e.push(d[r])
								}
								y(e), g(!1)
							} catch (c) {
								console.log(c), g(!1)
							}
						},
						Te = async e => {
							try {
								oe(!0);
								let n = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
								const t = new Ke.Contract(e.address, ["function approve(address spender, uint amount) external returns (bool)"], l).connect(l).approve,
									a = await t(p.Router.address, n.toString());
								await a.wait();
								let i = K;
								i[e.name] = n, G(i), oe(!1), xe(de.approveSuccess)
							} catch (n) {
								ye(n.reason), oe(!1), console.log(n.reason)
							}
						},
						ke = async(e, n, t, a, i, s, r) => {
							try {
								se(!0);
								const o = p.Router.connect(l).addLiquidityETH,
									c = await o(n, BigInt(i).toString(), BigInt(a).toString(), BigInt(t).toString(), s, r, {
										value: BigInt(e).toString()
									});
								await c.wait(), Oe(), xe(de.addSuccess), se(!1)
							} catch (o) {
								ye(o.reason), console.log(o.reason), se(!1)
							}
						},
						Me = async(e, n, t, a, i, s, r, o) => {
							try {
								se(!0);
								const c = p.Router.connect(l).addLiquidity,
									d = await c(e, n, BigInt(t).toString(), BigInt(a).toString(), BigInt(i).toString(), BigInt(s).toString(), r, o);
								await d.wait(), Oe(), xe(de.addSuccess), se(!1)
							} catch (c) {
								console.log(c.reason), ye(c.reason), se(!1)
							}
						},
						Ce = async() => {
							var e = v * (1 - U / 100),
								n = A * (1 - U / 100);
							h.tax > 0 ? (e -= e * (h.tax / 100), n -= n * (h.tax / 100)) : f.tax > 0 && (e -= e * (f.tax / 100), n -= n * (f.tax / 100)), e = Math.floor(e * 10 ** h.decimals), n = Math.floor(n * 10 ** f.decimals), e = 1, n = 1;
							var t = o,
								a = Math.floor((new Date).getTime() / 1e3) + Z;
							I.current.name === _[c][0].gas ? R.current.name === _[c][0].wrapped ? j({}) : ke(Math.floor(v * 10 ** h.decimals), R.current.address, e, n, Math.floor(A * 10 ** f.decimals), t, a) : R.current.name === _[c][0].gas ? I.current.name === _[c][0].wrapped ? w({}) : ke(Math.floor(A * 10 ** f.decimals), I.current.address, n, e, Math.floor(v * 10 ** h.decimals), t, a) : I.current.name === _[c][0].wrapped ? R.current.name === _[c][0].gas ? j({}) : Me(I.current.address, R.current.address, Math.floor(v * 10 ** h.decimals), Math.floor(A * 10 ** f.decimals), e, n, t, a) : R.current.name === _[c][0].wrapped && I.current.name === _[c][0].gas ? w({}) : Me(I.current.address, R.current.address, Math.floor(v * 10 ** h.decimals), Math.floor(A * 10 ** f.decimals), e, n, t, a), Oe()
						};
					let De;
					Object(r.useEffect)((() => {
						p.Router && !F && (P(!0), De ? (clearInterval(De), De = setInterval((() => {
							ve()
						}), 1e3)) : De = setInterval((() => {
							ve()
						}), 1e3))
					}), [o, p, l]), Object(r.useEffect)((() => {
						X === Ze && p.Router && Oe()
					}), [X, o, p, l]), Object(r.useEffect)((() => {
						localStorage.setItem("slippage", U)
					}), [U]), Object(r.useEffect)((() => {
						localStorage.setItem("txnDeadline", Z)
					}), [Z]);
					let Ne = K[h.name] < v,
						Se = K[h.name] >= v && K[f.name] < A,
						Ee = V[h.name] < v || V[f.name] < A,
						Ie = 0 === M;
					return Object(O.jsxs)($e, {
						children: [Object(O.jsx)(le, {
							title: ue.liquidity
						}), !n.cachedProvider && Object(O.jsx)(Be, {
							address: o,
							web3Modal: n,
							loadWeb3Modal: t,
							logoutOfWeb3Modal: a,
							language: s
						}), n.cachedProvider && Object(O.jsxs)(O.Fragment, {
							children: [D && Object(O.jsx)(Ae, {
								tokenOne: h,
								tokenTwo: f,
								close: () => N(!1),
								tokens: u,
								selectedToken: S,
								changeToken: (e, n) => {
									1 === e ? f.name === n.name || _[c][0].gas === n.name && _[c][0].wrapped === f.name || _[c][0].wrapped === n.name && _[c][0].gas === f.name ? (w(h), j(n), N(!1)) : (j(n), N(!1)) : 2 === e && (h.name === n.name || _[c][0].gas === h.name && _[c][0].wrapped === n.name || _[c][0].wrapped === h.name && _[c][0].gas === n.name ? (j(f), w(n), N(!1)) : (w(n), N(!1))), ve()
								},
								balances: V,
								language: s,
								signer: l,
								getBalances: ge,
								getAllowances: he,
								importedTokens: d
							}), L && Object(O.jsx)(je, {
								close: () => W(!1),
								setSlippage: q,
								slippage: U,
								txnDeadline: Z,
								setTxnDeadline: J,
								language: s
							}), Object(O.jsxs)("div", {
								className: "lp-func-buttons",
								children: [Object(O.jsx)(be, {
									text: de.viewAll,
									width: "150px",
									height: "30px",
									onclick: () => H(Ze)
								}), Object(O.jsx)(be, {
									text: de.addLiquidity,
									width: "150px",
									height: "30px",
									onclick: () => H(_e)
								})]
							}), X === Ze && Object(O.jsx)("div", {
								className: "view-liquidity",
								children: Object(O.jsxs)("div", {
									className: "view-component",
									children: [Object(O.jsx)(Qe, {
										title: de.viewLiquidity,
										func: () => W(!0)
									}), m.length ? Object(O.jsx)("div", {
										className: "all-liquidity",
										children: m.map((e => Object(O.jsx)(Xe, {
											data: e,
											setFunc: H,
											setTokenToRemove: Q,
											setRemovableBalance: ae,
											content: de
										}, e.tokenAddress)))
									}) : Object(O.jsxs)("div", {
										children: [b && Object(O.jsx)("p", {
											children: de.loadingLiq
										}), !b && Object(O.jsx)("p", {
											children: de.noneFound
										})]
									}), Object(O.jsx)(be, {
										width: "200px",
										text: de.addLiquidity,
										background: "black",
										color: "#00cf87",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 0 0",
										onclick: () => {
											H(_e)
										}
									})]
								})
							}), X === _e && Object(O.jsx)("div", {
								className: "add-liquidity",
								children: Object(O.jsxs)("div", {
									className: "swap-component",
									children: [Object(O.jsx)(Qe, {
										title: de.addLiquidity,
										func: () => W(!0)
									}), Object(O.jsxs)("div", {
										className: "swap-row",
										children: [Object(O.jsxs)("div", {
											className: "token-select-button-group",
											children: [Object(O.jsx)("p", {
												className: "button-label",
												children: de.from
											}), Object(O.jsxs)("button", {
												onClick: () => fe(1),
												children: [Object(O.jsx)("img", {
													src: "/images/tokenImages/".concat(h.name, ".svg"),
													onError: e => e.target.src = "/images/tokenImages/NOTFOUND.svg"
												}), Object(O.jsx)("span", {
													children: h.name
												}), Object(O.jsx)("svg", {
													stroke: "currentColor",
													fill: "currentColor",
													strokeWidth: "0",
													viewBox: "0 0 448 512",
													className: "text-lg",
													height: "1em",
													width: "1em",
													xmlns: "http://www.w3.org/2000/svg",
													children: Object(O.jsx)("path", {
														d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
													})
												})]
											})]
										}), Object(O.jsxs)("div", {
											className: "token-select-input-group",
											children: [Object(O.jsx)("p", {
												className: "input-label",
												children: de.balance.replace("%amount%", Number(V[h.name]).toFixed(18).replace(/\.?0+$/, "") || de.loading)
											}), Object(O.jsx)("input", {
												onChange: e => we(1, e.target.value),
												value: v
											})]
										})]
									}), Object(O.jsxs)("div", {
										children: [Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "25%",
											onclick: () => T(.25 * Number(V[h.name]).toFixed(18).replace(/\.?0+$/, ""))
										}), Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "50%",
											onclick: () => T(.5 * Number(V[h.name]).toFixed(18).replace(/\.?0+$/, ""))
										}), Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "75%",
											onclick: () => T(.75 * Number(V[h.name]).toFixed(18).replace(/\.?0+$/, ""))
										}), Object(O.jsx)(be, {
											width: "50px",
											height: "30px",
											text: "100%",
											onclick: () => T(Number(V[h.name]).toFixed(18).replace(/\.?0+$/, ""))
										})]
									}), Object(O.jsxs)("svg", {
										stroke: "currentColor",
										fill: "currentColor",
										strokeWidth: "0",
										viewBox: "0 0 24 24",
										className: "text-5xl text-3",
										height: "30px",
										width: "30px",
										xmlns: "http://www.w3.org/2000/svg",
										onClick: () => {
											let e = h;
											j(f), w(e)
										},
										children: [Object(O.jsx)("path", {
											fill: "none",
											d: "M0 0h24v24H0V0z"
										}), Object(O.jsx)("path", {
											d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
										})]
									}), Object(O.jsxs)("div", {
										className: "swap-row",
										children: [Object(O.jsxs)("div", {
											className: "token-select-button-group",
											children: [Object(O.jsx)("p", {
												className: "button-label",
												children: de.to
											}), Object(O.jsxs)("button", {
												onClick: () => fe(2),
												children: [Object(O.jsx)("img", {
													src: "/images/tokenImages/".concat(f.name, ".svg"),
													onError: e => e.target.src = "/images/tokenImages/NOTFOUND.svg"
												}), Object(O.jsx)("span", {
													children: f.name
												}), Object(O.jsx)("svg", {
													stroke: "currentColor",
													fill: "currentColor",
													strokeWidth: "0",
													viewBox: "0 0 448 512",
													className: "text-lg",
													height: "1em",
													width: "1em",
													xmlns: "http://www.w3.org/2000/svg",
													children: Object(O.jsx)("path", {
														d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
													})
												})]
											})]
										}), Object(O.jsxs)("div", {
											className: "token-select-input-group",
											children: [Object(O.jsx)("p", {
												className: "input-label",
												children: de.balance.replace("%amount%", Number(V[f.name]).toFixed(18).replace(/\.?0+$/, "") || de.loading)
											}), Object(O.jsx)("input", {
												onChange: e => we(2, e.target.value),
												value: A,
												disabled: !Ie
											})]
										})]
									}), Ie && Object(O.jsx)("p", {
										style: {
											color: "red"
										},
										children: "This pair does not exist yet, you will be setting the initial liquidity!"
									}), Ne ? Object(O.jsx)(be, {
										width: "200px",
										text: re ? de.approving : de.approve + " " + h.name,
										background: "black",
										color: "#00cf87",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0",
										onclick: () => {
											Te(h)
										}
									}) : Se ? Object(O.jsx)(be, {
										width: "200px",
										text: re ? de.approving : de.approve + " " + f.name,
										background: "black",
										color: "#00cf87",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 25px 0",
										onclick: () => {
											Te(f)
										}
									}) : Ee ? Object(O.jsx)(be, {
										width: "200px",
										text: de.insufficientBal,
										background: "grey",
										color: "black",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 0 0"
									}) : Ie ? Object(O.jsx)(be, {
										width: "200px",
										text: ie ? "Creating Liquidity..." : "Create Liquidity",
										background: "#00cf87",
										color: "black",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 0 0",
										onclick: () => {
											Ce()
										}
									}) : Object(O.jsx)(be, {
										width: "200px",
										text: ie ? de.addingLiq : de.addLiquidity,
										background: "black",
										color: "#00cf87",
										borderRadius: "25px",
										height: "50px",
										margin: "15px 0 0 0",
										onclick: () => {
											Ce()
										}
									}), (h.tax > 0 || f.tax > 0) && Object(O.jsx)("div", {
										className: "info-group",
										children: Object(O.jsx)("p", {
											style: {
												color: "red"
											},
											children: de.taxMessage.replace("%tax%", h.tax + f.tax)
										})
									})]
								})
							}), X === Je && Object(O.jsx)("div", {
								className: "remove-liquidity",
								children: Object(O.jsx)(Ye, {
									address: o,
									contract: p,
									signer: l,
									chainId: c,
									setSlippageModalOpen: W,
									tokenToRemove: z,
									removableBalance: $,
									slippage: U,
									txnDeadline: Z,
									notify_warn: ye,
									notify_success: xe,
									content: de,
									getTokens: Oe
								})
							}), Object(O.jsx)(me.a, {
								position: "top-right",
								autoClose: 5e3,
								hideProgressBar: !1,
								newestOnTop: !1,
								closeOnClick: !0,
								rtl: !1,
								pauseOnFocusLoss: !0,
								draggable: !0,
								pauseOnHover: !0
							})]
						})]
					})
				},
				tn = t(37),
				an = t(726),
				sn = t(727);
			const {
				ethers: rn
			} = t(33), on = y.a.div(en || (en = Object(d.a)(["\n  background: rgba(0, 0, 0, 0.9);\n  border-radius: 5px;\n  border: 1px solid #00cf87;\n  color: white;\n  box-shadow: 0px 0px 15px #023c28;\n  margin: 10px 0px;\n\n  &:first-child {\n    border-radius: 10px 10px 0 0;\n  }\n\n  &:not(:first-child) {\n    &:not(:last-child) {\n      border-radius: 0 0 0 0;\n    }\n  }\n\n  &:last-child {\n    border-radius: 0 0 10px 10px;\n  }\n\n  &:first-child {\n    &:last-child {\n      border-radius: 10px;\n    }\n  }\n\n  .pool-header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n    .pool-column {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      p {\n        margin: 0;\n      }\n    }\n  }\n\n  .pool-header-two {\n    .desktop-header {\n      display: flex;\n      flex-direction: column;\n      padding: 12px;\n\n      p {\n        margin: 0;\n      }\n\n      .vault-header-data {\n        display: flex;\n\n        .vault-logos {\n          min-width: 55px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          position: absolute;\n\n          .tokenImg {\n            width: 25px;\n            border: 1px solid #00cf87;\n            box-shadow: 0px 0px 15px #023c28;\n            border-radius: 25px;\n          }\n\n          .tokenOneImg,\n          .tokenTwoImg {\n            width: 25px;\n            border: 1px solid #00cf87;\n            box-shadow: 0px 0px 15px #023c28;\n            border-radius: 25px;\n            margin-left: -10px;\n            margin-top: -10px;\n          }\n          .tokenTwoImg {\n            margin-top: 10px;\n          }\n        }\n\n        .vault-title {\n          min-width: 70px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin-left: 45px;\n          margin-right: 3px;\n\n          p {\n            font-size: 10px;\n            margin: 0;\n            font-weight: 900;\n          }\n        }\n\n        .vault-header-data-column {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n\t\t\t\t\tpadding: 0 3px;\n\n          .column-data {\n            p {\n              font-size: 12px;\n            }\n          }\n\n          &:first-child {\n            padding-left: 20px;\n            align-items: flex-start;\n          }\n        }\n\n        .multiplier {\n          @media (max-width: 768px) {\n            display: none;\n          }\n        }\n\n        .tvl {\n          @media (max-width: 768px) {\n            display: none;\n          }\n        }\n\n        .dpr {\n          @media (max-width: 1024px) {\n            display: none;\n          }\n        }\n\n        .rewards {\n          @media (max-width: 598px) {\n            display: none;\n          }\n        }\n\n        .open-close {\n          justify-content: center;\n          width: 20%;\n        }\n      }\n\n      .vault-header-buttons {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        padding: 0 20px;\n\n        button {\n          font-size: 14px;\n\n          &:first-child {\n            margin-right: 5px;\n          }\n\n          &:last-child {\n            margin-left: 5px;\n          }\n        }\n      }\n    }\n  }\n\n  .claimBox {\n    display: grid;\n    padding: 0px 20px 20px 20px;\n  }\n\n  .outerBox {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0px 20px 20px 20px;\n\n    @media (max-width: 1024px) {\n      flex-direction: column;\n    }\n\n    @media (max-width: 375px) {\n      padding: 0px 10px 10px 10px;\n    }\n\n    b {\n      font-size: 25px;\n    }\n\n    .pool-data {\n      width: 50%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      padding-right: 20px;\n      border-right: 1px solid #e0bfb8;\n\n      @media (max-width: 1024px) {\n        width: 100%;\n        padding: 0;\n        border: none;\n      }\n\n      .stat {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        min-height: 54px;\n\n        p {\n          margin: 0;\n        }\n\n        @media (max-width: 1024px) {\n          min-height: 38px;\n        }\n\n        &:not(:last-child) {\n          border-bottom: 1px solid #e0bfb8;\n        }\n\n        div {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n        }\n      }\n    }\n\n    .stake-unstake-display {\n      width: 50%;\n\n      @media (max-width: 1024px) {\n        width: 100%;\n      }\n\n      input {\n        border-radius: 5px;\n        border: 1px solid black;\n        color: black;\n        text-align: center;\n        font-size: 17px;\n      }\n\n      .zap-stake-toggle {\n        display: inline-flex;\n\n        button {\n          width: 70px;\n          border: 1px solid #00cf87;\n        }\n\n        .zap-button {\n          border-radius: 15px 0 0 15px;\n        }\n\n        .stake-button {\n          border-radius: 0 15px 15px 0;\n        }\n      }\n\n      .stakeBox {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        .quickBtns {\n          width: 100%;\n\n          @media (max-width: 375px) {\n            button {\n              font-size: 14px;\n              width: 40px;\n            }\n          }\n        }\n\t\t\t\t\n\t\t\t\t.warning {\n\t\t\t\t\tcolor:red;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n      }\n\n      .unstakeBox {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        .quickBtns {\n          width: 100%;\n        }\n\t\t\t\t\n\t\t\t\t.warning {\n\t\t\t\t\tcolor:red;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n      }\n    }\n  }\n\n  .boosters {\n    .booster-headers {\n      display: flex;\n\n      .booster-header {\n        width: 70%;\n        height: 40px;\n        background: #00cf87;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid black;\n\n        p {\n          margin: 0;\n          color: black;\n          font-size: 18px;\n          font-weight: 600;\n        }\n      }\n    }\n\n    h3,\n    h4 {\n      color: white;\n    }\n\n    .approve-button {\n      .approve {\n        width: 250px;\n        background: #00cf87;\n        border-radius: 5px;\n        border: none;\n        margin: 10px;\n        color: black;\n        font-weight: 900;\n        height: 35px;\n        font-size: 16px;\n        &:hover {\n          background: #e0bfb8;\n          color: black;\n          font-size: 18px;\n          cursor: pointer;\n        }\n      }\n    }\n\n    .boosters-row {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 30px;\n\n      .term-boosters {\n        display: flex;\n        width: 100%;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img {\n          width: 80px;\n          height: 80px;\n          border-radius: 5px;\n          margin: 10px;\n          border: 1px solid #00cf87;\n          cursor: pointer;\n\n          @media (max-width: 585px) {\n            width: 50px;\n            height: 50px;\n          }\n\n          @media (max-width: 320px) {\n            width: 40px;\n            height: 40px;\n          }\n        }\n\n        .nft {\n          cursor: pointer;\n          width: 80px;\n          height: 80px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background: white;\n          border-radius: 5px;\n          margin: 10px;\n          background: linear-gradient(\n            37deg,\n            rgba(0, 207, 135, 1) 0%,\n            rgba(224, 191, 184, 1) 16%,\n            rgba(133, 197, 164, 1) 34%,\n            rgba(224, 191, 184, 1) 51%,\n            rgba(45, 204, 145, 1) 68%,\n            rgba(224, 191, 184, 1) 83%,\n            rgba(0, 207, 135, 1) 100%\n          );\n\n          @media (max-width: 585px) {\n            width: 50px;\n            height: 50px;\n          }\n\n          @media (max-width: 320px) {\n            width: 40px;\n            height: 40px;\n          }\n\n          .nft-inner {\n            width: 95%;\n            height: 95%;\n            color: white;\n            background: rgba(0, 0, 0, 0.85);\n            border-radius: 5px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            p {\n              margin: 0;\n              font-size: 60px;\n              height: 135%;\n            }\n\n            &:hover {\n              color: #00cf87;\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
			var pn, ln = e => {
				let {
					poolId: n,
					content: t,
					address: a,
					contract: i,
					signer: s,
					prices: o,
					isLp: p,
					contractName: l,
					notify_warn: c,
					notify_success: d
				} = e;
				const [u, m] = Object(r.useState)(""), [y, b] = Object(r.useState)(!1), [x, g] = Object(r.useState)(0), [h, j] = Object(r.useState)(0), f = ["function approve(address spender, uint amount) external returns (bool)", "function balanceOf(address account) external view returns (uint256)", "function allowance(address owner, address spender) external view returns (uint256)"], [w, v] = Object(r.useState)([]), [T, k] = Object(r.useState)(null), [A, B] = Object(r.useState)([]), [M, C] = Object(r.useState)(null), [D, N] = Object(r.useState)(null), [S, E] = Object(r.useState)(null), [I, R] = Object(r.useState)(null), [F, P] = Object(r.useState)(0), [L, W] = Object(r.useState)(null), [X, H] = Object(r.useState)(null), [z, Q] = Object(r.useState)([]), [U, q] = Object(r.useState)(!1), [V, Y] = Object(r.useState)(!1), [K, G] = Object(r.useState)(!1), [Z, J] = Object(r.useState)(!1), [_, $] = Object(r.useState)(!0), [ee, ne] = Object(r.useState)(0), te = async() => {
					try {
						if ("Farms" === l) {
							const e = i[l].connect(s).getLogicContract,
								n = await e();
							m(n)
						} else m(i[l].address);
						if ("RealYield" === l) {
							const n = i[l].connect(s).getPool,
								c = await n();
							v(c);
							const d = i[l].connect(s).getTvl,
								u = await d();
							k(parseInt(u) / 1e18);
							var e = o[c.name];
							ne(e);
							const m = i[l].connect(s).getRewardsPerSecond,
								y = await m();
							var t = 86400 * (p = parseInt(y._hex) / 1e18) * o.WETH,
								a = 31536e3 * p * o.WETH,
								r = parseInt(u._hex) / 1e18 * e;
							W(Math.floor(t / r * 100 * 1e3) / 1e3), H(Math.floor(a / r * 100 * 1e3) / 1e3)
						} else if ("vDBXStaking" === l) {
							const n = i[l].connect(s).getPool,
								t = await n();
							v(t);
							const a = i[l].connect(s).getTvl,
								r = await a();
							k(parseInt(r) / 1e18);
							e = o.DBX;
							ne(e);
							const c = i[l].connect(s).getApr,
								d = await c();
							var p = parseInt(d._hex);
							W(Math.floor(p / 365 * 1e3) / 1e3), H(Math.floor(1e3 * p) / 1e3)
						} else {
							const m = i.Farms.connect(s).getPool,
								b = await m(n);
							v(b);
							const x = i.Farms.connect(s).getTvl,
								g = await x(n);
							e = o[b.name];
							ne(e);
							const h = i.Farms.connect(s).getTotalAllocPoint,
								j = await h();
							var c = parseInt(j._hex);
							const f = i.Farms.connect(s).getRewardPerSecond,
								w = await f();
							p = parseInt(w._hex) / 1e18;
							const O = i.Farms.connect(s).getMultiplier,
								T = await O();
							var d = parseInt(T._hex) / 1e3;
							t = p * d * parseInt(b.allocPoint._hex) / c * 86400 * o.DBX, a = p * d * parseInt(b.allocPoint._hex) / c * 31536e3 * o.DBX, r = parseInt(g._hex) / 1e18 * e;
							if ("Farms" === l) W(Math.floor(t / r * 100 * 1e3) / 1e3), H(Math.floor(a / r * 100 * 1e3) / 1e3);
							else {
								var u = t / 24;
								const e = i.Farms.connect(s).getPool,
									n = await e(0),
									l = i.Farms.connect(s).getTvl,
									m = await l(0);
								parseInt(m._hex), o.DBX;
								var y = p * d * parseInt(n.allocPoint._hex) / c * 3600 / (parseInt(m._hex) / 1e18) + 1;
								a = u * ((y ** 8760 - 1) / (y - 1)), H(Math.floor(a / r * 100 * 1e3) / 1e3)
							}
							const A = i[l].connect(s).getTvl,
								B = await A(n);
							k(parseInt(B._hex) / 1e18)
						}
					} catch (b) {
						console.log(b)
					}
				}, ae = async() => {
					if (w.length > 0 && "" !== u) try {
						if ("RealYield" === l || "vDBXStaking" === l) {
							const e = i[l].connect(s).getUser,
								n = await e(a);
							B(n);
							const t = i[l].connect(s).pendingRewards,
								r = await t(a);
							C(parseInt(r._hex) / 1e18)
						} else {
							const e = i[l].connect(s).getUser,
								t = await e(n, a);
							B(t);
							const r = i[l].connect(s).pendingRewards,
								o = await r(n, a);
							"Vaults" === l ? (C(parseInt(o[0]) / 1e18), E(parseInt(o[1]) / 1e18), N(parseInt(o[2]) / 1e18)) : C(parseInt(o._hex) / 1e18)
						}
						const e = new rn.Contract(w.lpToken, f, s),
							t = e.connect(s).balanceOf,
							r = await t(a);
						R(r);
						const o = e.connect(s).allowance,
							p = await o(a, u);
						P(parseInt(p._hex) / 1e18)
					} catch (e) {
						console.log(e)
					}
				};

				function ie(e) {
					return "$" + e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
				}
				const se = (e, n) => {
					var t = 0;
					"stake" === n && (t = Number(I)), "unstake" === n && (t = Number(parseInt(A.amount._hex))), 0 === e && (t = 0), 25 === e && (t = Number(parseFloat(.25 * t))), 50 === e && (t = Number(parseFloat(.5 * t))), 75 === e && (t = Number(parseFloat(.75 * t))), 100 === e && (t = Number(parseFloat(t))), t = Number(t / 1e18).toFixed(18).replace(/\.?0+$/, ""), "stake" === n && g(t), "unstake" === n && j(t)
				};
				let re, oe;
				return Object(r.useEffect)((() => {
					0 === w.length && (te(), re ? (clearInterval(re), re = setInterval((() => {
						te()
					}), 6e4)) : re = setInterval((() => {
						te()
					}), 6e4)), 0 === A.length && (ae(), oe ? (clearInterval(oe), oe = setInterval((() => {
						ae()
					}), 1e4)) : oe = setInterval((() => {
						ae()
					}), 1e4))
				}), [a, i, s, w]), Object(O.jsxs)(on, {
					children: [(0 === w.length || 0 === A.length) && Object(O.jsx)("div", {
						children: t.loadingFarm
					}), w.length > 0 && A.length > 0 && Object(O.jsx)("div", {
						className: "pool-header-two",
						onClick: () => {
							b(!y)
						},
						children: Object(O.jsx)("div", {
							className: "desktop-header",
							children: Object(O.jsxs)("div", {
								className: "vault-header-data",
								children: [p && Object(O.jsxs)("div", {
									className: "vault-logos",
									children: [Object(O.jsx)("img", {
										className: "tokenOneImg",
										src: "/images/tokenImages/" + w.name.split("-")[0] + ".svg"
									}), Object(O.jsx)("img", {
										className: "tokenTwoImg",
										src: "/images/tokenImages/" + w.name.split("-")[1] + ".svg"
									})]
								}), !p && Object(O.jsx)("div", {
									className: "vault-logos",
									children: Object(O.jsx)("img", {
										className: "tokenImg",
										src: "/images/tokenImages/" + w.name + ".svg"
									})
								}), Object(O.jsx)("div", {
									className: "vault-title",
									children: Object(O.jsx)("p", {
										children: w.name
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column staked",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: t.staked
										}), Object(O.jsx)("p", {
											children: 0 === A.length ? 0 : ie(A.amount / 1e18 * ee)
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column rewards",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: t.rewards
										}), Object(O.jsx)("p", {
											children: 0 === A.length ? ie(0) : "RealYield" === l ? o.WETH * M >= .01 ? ie(o.WETH * M) : "< " + ie(.01) : o.DBX * M + o.DBC * S + o.DBX * D === 0 ? ie(0) : o.DBX * M + o.DBC * S + o.DBX * D >= .01 ? ie(o.DBX * M + o.DBC * S + o.DBX * D) : "< " + ie(.01) || !1
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column apr",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: "Vaults" === l ? t.apy : t.apr
										}), Object(O.jsx)("p", {
											children: 0 === A.length ? 0 : "".concat(Ee(X, 2), "%") || !1
										})]
									})
								}), "Vaults" !== l && Object(O.jsx)("div", {
									className: "vault-header-data-column dpr",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: t.dpr
										}), Object(O.jsx)("p", {
											children: 0 === A.length ? 0 : "".concat(Ee(L, 2), "%") || !1
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column tvl",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: t.tvl
										}), Object(O.jsx)("p", {
											children: ie(ee * T)
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column open-close",
									children: y ? Object(O.jsx)(sn.a, {}) : Object(O.jsx)(an.a, {})
								})]
							})
						})
					}), y && Object(O.jsxs)("div", {
						className: "expanded",
						children: [Object(O.jsx)("div", {
							className: "claimBox",
							children: Object(O.jsx)(be, {
								onclick: async() => {
									if (0 === A.amount) c(t.zeroClaimErr);
									else try {
										if (Y(!0), "Farms" === l) {
											const e = i[l].connect(s).withdraw,
												t = await e(n, 0);
											await t.wait()
										} else if ("RealYield" === l || "vDBXStaking" === l) {
											const e = i[l].connect(s).withdraw,
												n = await e(0);
											await n.wait()
										} else {
											const e = i[l].connect(s).harvest,
												t = await e(n);
											await t.wait()
										}
										te(), ae(), d(t.claimSuccess), Y(!1)
									} catch (e) {
										c(e.reason), Y(!1), console.log(e.reason)
									}
								},
								text: V ? t.harvesting : t.harvest.replace("%dollarAmount%", "RealYield" === l ? o.WETH * M >= .01 ? ie(o.WETH * M) : "< " + ie(.01) : o.DBX * M + o.DBC * S + o.DBX * D === 0 ? ie(0) : o.DBX * M + o.DBC * S + o.DBX * D >= .01 ? ie(o.DBX * M + o.DBC * S + o.DBX * D) : "< " + ie(.01))
							})
						}), Object(O.jsxs)("div", {
							className: "outerBox",
							children: [Object(O.jsxs)("div", {
								className: "pool-data",
								children: [Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: t.rewards
									}), Object(O.jsxs)("div", {
										children: ["RealYield" === l && Object(O.jsxs)("p", {
											children: [Ee(M, 6), " WETH"]
										}), "vDBXStaking" === l && Object(O.jsxs)("p", {
											children: [Ee(M, 6), " vDBX"]
										}), "RealYield" !== l && "vDBXStaking" !== l && Object(O.jsxs)("p", {
											children: [Ee(M, 6), " DBX"]
										}), S > 0 && Object(O.jsxs)("p", {
											children: [Ee(S, 6), " DBC"]
										}), D > 0 && Object(O.jsxs)("p", {
											children: [Ee(D, 6), " vDBX"]
										}), "RealYield" === l && Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: o.WETH * M >= .01 ? ie(o.WETH * M) : "< " + ie(.01)
										}), "RealYield" !== l && Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: o.DBX * M + o.DBC * S + o.DBX * D === 0 ? ie(0) : o.DBX * M + o.DBC * S + o.DBX * D >= .01 ? ie(o.DBX * M + o.DBC * S + o.DBX * D) : "< " + ie(.01)
										})]
									})]
								}), Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: t.staked
									}), Object(O.jsxs)("div", {
										children: [Object(O.jsxs)("p", {
											children: [0 === A.length ? 0 : Ee(parseInt(A.amount._hex) / 1e18, 6), " ", w.name]
										}), Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: ie(ee * (parseInt(A.amount._hex) / 1e18))
										})]
									})]
								}), Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: "Vaults" === l ? t.apy : t.apr
									}), Object(O.jsxs)("p", {
										children: [Ee(X, 2), "%"]
									})]
								}), "Vaults" !== l && Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: t.dpr
									}), Object(O.jsx)("div", {
										children: Object(O.jsxs)("p", {
											style: {
												fontSize: "12px"
											},
											children: [Ee(L, 2), "%"]
										})
									})]
								}), Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: t.tvl
									}), Object(O.jsxs)("div", {
										children: [Object(O.jsxs)("p", {
											style: {
												fontSize: "12px"
											},
											children: [Ee(T, 6), " ", w.name]
										}), Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: ie(ee * T)
										})]
									})]
								})]
							}), Object(O.jsxs)("div", {
								className: "stake-unstake-display",
								children: [Object(O.jsxs)("div", {
									className: "zap-stake-toggle",
									children: [Object(O.jsx)("button", {
										style: {
											background: _ ? "#00cf87" : "black",
											color: _ ? "black" : "#00cf87"
										},
										className: "zap-button",
										onClick: () => $(!0),
										children: t.stake
									}), Object(O.jsx)("button", {
										style: {
											background: _ ? "black" : "#00cf87",
											color: _ ? "#00cf87" : "black"
										},
										className: "stake-button",
										onClick: () => $(!1),
										children: t.unstake
									})]
								}), _ ? Object(O.jsxs)("div", {
									className: "stakeBox",
									children: [Object(O.jsx)("b", {
										children: t.stake
									}), Object(O.jsx)("input", {
										type: "number",
										value: x,
										onChange: e => {
											g(e.target.value)
										}
									}), Object(O.jsx)("p", {
										children: t.balance.replace("%balance%", Ee(I / 1e18, 18)).replace("%currency%", w.name)
									}), Object(O.jsxs)("div", {
										className: "quickBtns",
										children: [Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												se(0, "stake")
											},
											text: "0%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												se(25, "stake")
											},
											text: "25%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												se(50, "stake")
											},
											text: "50%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												se(75, "stake")
											},
											text: "75%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												se(100, "stake")
											},
											text: "100%"
										})]
									}), F >= x && Object(O.jsx)(be, {
										width: "200px",
										onclick: async() => {
											if (0 === x) c(t.zeroStakeErr);
											else try {
												if (G(!0), "RealYield" === l || "vDBXStaking" === l) {
													const e = i[l].connect(s).deposit;
													await e(Object(tn.d)(x.toString(), 18))
												} else {
													const e = i[l].connect(s).deposit;
													await e(n, Object(tn.d)(x.toString(), 18))
												}
												await hash.wait(), te(), ae(), d(t.stakeSuccess), G(!1)
											} catch (e) {
												G(!1), c(e.reason), console.log(e.reason)
											}
										},
										text: "".concat(K ? t.staking : t.stake)
									}), F < x && Object(O.jsx)(be, {
										width: "200px",
										onclick: async() => {
											if ("" !== u) try {
												q(!0);
												let e = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
												const n = new rn.Contract(w.lpToken, f, s),
													i = n.connect(s).approve,
													r = await i(u, e.toString());
												await r.wait();
												const o = n.connect(s).allowance,
													p = await o(a, u);
												P(parseInt(p._hex) / 1e18), d(t.approveSuccess), q(!1)
											} catch (e) {
												q(!1), c(e.reason), console.log(e.reason)
											}
										},
										text: U ? t.approving : t.approve
									}), "Vaults" === l && Object(O.jsx)("b", {
										className: "warning",
										children: t.stakingWarning
									})]
								}) : Object(O.jsxs)("div", {
									className: "unstakeBox",
									children: [Object(O.jsx)("b", {
										children: t.unstake
									}), Object(O.jsx)("input", {
										type: "number",
										value: h,
										onChange: e => {
											j(e.target.value)
										}
									}), Object(O.jsxs)("p", {
										children: [t.staked, " ", 0 === A.length ? 0 : Number(parseInt(A.amount._hex) / 1e18).toFixed(18).replace(/\.?0+$/, ""), " ", w.name]
									}), Object(O.jsxs)("div", {
										className: "quickBtns",
										children: [Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												se(0, "unstake")
											},
											text: "0%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												se(25, "unstake")
											},
											text: "25%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												se(50, "unstake")
											},
											text: "50%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												se(75, "unstake")
											},
											text: "75%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												se(100, "unstake")
											},
											text: "100%"
										})]
									}), Object(O.jsx)(be, {
										width: "200px",
										onclick: async() => {
											if (0 === h) c(t.zeroUnstakeErr);
											else try {
												if (J(!0), "RealYield" === l || "vDBXStaking" === l) {
													const e = i[l].connect(s).withdraw;
													await e(Object(tn.d)(h.toString(), 18))
												} else {
													const e = i[l].connect(s).withdraw;
													await e(n, Object(tn.d)(h.toString(), 18))
												}
												await hash.wait(), te(), ae(), d(t.unstakeSuccess), J(!1)
											} catch (e) {
												J(!1), c(e.reason), console.log(e.reason)
											}
										},
										text: "".concat(Z ? t.unstaking : t.unstake)
									})]
								})]
							})]
						})]
					})]
				})
			};
			const cn = y.a.div(pn || (pn = Object(d.a)(["\n  padding: 10px 50px;\n  z-index: 0;\n  width: 100%;\n\n  @media (max-width: 1025px) {\n    padding-top: 50px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 40px 20px;\n  }\n"])));
			var dn, un = function(e) {
				let {
					web3Modal: n,
					loadWeb3Modal: t,
					logoutOfWeb3Modal: a,
					setPageTitle: i,
					language: s,
					address: o,
					contract: p,
					signer: l,
					prices: c,
					chainId: d
				} = e;
				const [u, m] = Object(r.useState)([]), y = x.farm[s], b = x.pageTitles[s].farms, g = e => me.b.warn(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				}), h = e => me.b.success(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				});
				return Object(r.useEffect)((() => {
					i(b), o && (async() => {
						try {
							const n = p.Farms.connect(l).getTotalPools,
								t = await n();
							var e = parseInt(t._hex);
							let a = [];
							for (let i = 0; i < e; i++) {
								const e = p.Farms.connect(l).getPool;
								if ((await e(i)).isLp) {
									const e = p.FarmsAdmin.connect(l).isBlocked;
									await e(i) || a.push(Object(O.jsx)(ln, {
										poolId: i,
										address: o,
										contract: p,
										signer: l,
										prices: c,
										content: y,
										isLp: !0,
										contractName: "Farms",
										notify_warn: g,
										notify_success: h
									}, i))
								}
							}
							m(a)
						} catch (n) {}
					})()
				}), [o, p, l]), Object(O.jsxs)(cn, {
					children: [Object(O.jsx)(le, {
						title: b
					}), !n.cachedProvider && Object(O.jsx)(Be, {
						address: o,
						web3Modal: n,
						loadWeb3Modal: t,
						logoutOfWeb3Modal: a,
						language: s
					}), n.cachedProvider && 0 === u.length && Object(O.jsx)("div", {
						className: "content",
						children: y.loadingFarm
					}), n.cachedProvider && u.length > 0 && Object(O.jsx)("div", {
						className: "content",
						children: u.map((e => e))
					}), Object(O.jsx)(me.a, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						newestOnTop: !1,
						closeOnClick: !0,
						rtl: !1,
						pauseOnFocusLoss: !0,
						draggable: !0,
						pauseOnHover: !0
					})]
				})
			};
			const mn = y.a.div(dn || (dn = Object(d.a)(["\n  padding: 10px 50px;\n  z-index: 0;\n  width: 100%;\n\n  @media (max-width: 1025px) {\n    padding-top: 50px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 40px 20px;\n  }\n"])));
			var yn, bn = function(e) {
				let {
					web3Modal: n,
					loadWeb3Modal: t,
					logoutOfWeb3Modal: a,
					setPageTitle: i,
					language: s,
					address: o,
					contract: p,
					signer: l,
					prices: c,
					chainId: d
				} = e;
				const [u, m] = Object(r.useState)([]), y = x.farm[s], b = x.pageTitles[s].staking, g = e => me.b.warn(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				}), h = e => me.b.success(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				});
				return Object(r.useEffect)((() => {
					i(b), o && (async() => {
						try {
							const n = p.Farms.connect(l).getTotalPools,
								t = await n();
							var e = parseInt(t._hex);
							let a = [];
							for (let i = 0; i < e; i++) {
								const e = p.Farms.connect(l).getPool;
								(await e(i)).isLp || a.push(Object(O.jsx)(ln, {
									poolId: i,
									address: o,
									contract: p,
									signer: l,
									prices: c,
									content: y,
									isLp: !1,
									contractName: "Farms",
									notify_warn: g,
									notify_success: h
								}, i))
							}
							m(a)
						} catch (n) {}
					})()
				}), [o, p, l]), Object(O.jsxs)(mn, {
					children: [Object(O.jsx)(le, {
						title: b
					}), !n.cachedProvider && Object(O.jsx)(Be, {
						address: o,
						web3Modal: n,
						loadWeb3Modal: t,
						logoutOfWeb3Modal: a,
						language: s
					}), n.cachedProvider && 0 === u.length && Object(O.jsx)("div", {
						className: "content",
						children: y.loadingFarm
					}), n.cachedProvider && u.length > 0 && Object(O.jsxs)("div", {
						className: "content",
						children: [u.map((e => e)), Object(O.jsx)(ln, {
							poolId: 100,
							address: o,
							contract: p,
							signer: l,
							prices: c,
							content: y,
							isLp: !1,
							contractName: "RealYield",
							notify_warn: g,
							notify_success: h
						}, 100), Object(O.jsx)(ln, {
							poolId: 101,
							address: o,
							contract: p,
							signer: l,
							prices: c,
							content: y,
							isLp: !1,
							contractName: "vDBXStaking",
							notify_warn: g,
							notify_success: h
						}, 101)]
					}), Object(O.jsx)(me.a, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						newestOnTop: !1,
						closeOnClick: !0,
						rtl: !1,
						pauseOnFocusLoss: !0,
						draggable: !0,
						pauseOnHover: !0
					})]
				})
			};
			const xn = t(136),
				gn = y.a.div(yn || (yn = Object(d.a)(["\n  background: rgba(0, 0, 0, 0.9);\n  border-radius: 5px;\n  border: 1px solid #00cf87;\n  color: white;\n  box-shadow: 0px 0px 15px #023c28;\n  margin: 10px 0px;\n\n  &:first-child {\n    border-radius: 10px 10px 0 0;\n  }\n\n  &:not(:first-child) {\n    &:not(:last-child) {\n      border-radius: 0 0 0 0;\n    }\n  }\n\n  &:last-child {\n    border-radius: 0 0 10px 10px;\n  }\n\n  &:first-child {\n    &:last-child {\n      border-radius: 10px;\n    }\n  }\n\n  .pool-header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n    .pool-column {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      p {\n        margin: 0;\n      }\n    }\n  }\n\n  .pool-header-two {\n    .desktop-header {\n      display: flex;\n      flex-direction: column;\n      padding: 12px;\n\n      p {\n        margin: 0;\n      }\n\n      .vault-header-data {\n        display: flex;\n\n        .vault-logos {\n          min-width: 55px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          position: absolute;\n\n          .tokenImg {\n            width: 25px;\n            border: 1px solid #00cf87;\n            box-shadow: 0px 0px 15px #023c28;\n            border-radius: 25px;\n          }\n\n          .tokenOneImg,\n          .tokenTwoImg {\n            width: 25px;\n            border: 1px solid #00cf87;\n            box-shadow: 0px 0px 15px #023c28;\n            border-radius: 25px;\n            margin-left: -10px;\n            margin-top: -10px;\n          }\n          .tokenTwoImg {\n            margin-top: 10px;\n          }\n        }\n\n        .vault-title {\n          min-width: 70px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin-left: 45px;\n          margin-right: 3px;\n\n          p {\n            font-size: 10px;\n            margin: 0;\n            font-weight: 900;\n          }\n        }\n\n        .vault-header-data-column {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n\t\t\t\t\tpadding: 0 3px;\n\n          .column-data {\n            p {\n              font-size: 12px;\n            }\n          }\n\n          &:first-child {\n            padding-left: 20px;\n            align-items: flex-start;\n          }\n        }\n\n        .multiplier {\n          @media (max-width: 768px) {\n            display: none;\n          }\n        }\n\n        .tvl {\n          @media (max-width: 768px) {\n            display: none;\n          }\n        }\n\n        .dpr {\n          @media (max-width: 1024px) {\n            display: none;\n          }\n        }\n\n        .rewards {\n          @media (max-width: 598px) {\n            display: none;\n          }\n        }\n\n        .open-close {\n          justify-content: center;\n          width: 20%;\n        }\n      }\n\n      .vault-header-buttons {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        padding: 0 20px;\n\n        button {\n          font-size: 14px;\n\n          &:first-child {\n            margin-right: 5px;\n          }\n\n          &:last-child {\n            margin-left: 5px;\n          }\n        }\n      }\n    }\n  }\n\n  .claimBox {\n    display: grid;\n    padding: 0px 20px 20px 20px;\n  }\n\n  .outerBox {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0px 20px 20px 20px;\n\n    @media (max-width: 1024px) {\n      flex-direction: column;\n    }\n\n    @media (max-width: 375px) {\n      padding: 0px 10px 10px 10px;\n    }\n\n    b {\n      font-size: 25px;\n    }\n\n    .pool-data {\n      width: 50%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      padding-right: 20px;\n      border-right: 1px solid #e0bfb8;\n\n      @media (max-width: 1024px) {\n        width: 100%;\n        padding: 0;\n        border: none;\n      }\n\n      .stat {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        min-height: 54px;\n\n        p {\n          margin: 0;\n        }\n\n        @media (max-width: 1024px) {\n          min-height: 38px;\n        }\n\n        &:not(:last-child) {\n          border-bottom: 1px solid #e0bfb8;\n        }\n\n        div {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-end;\n        }\n      }\n\t\t\t\n\t\t\t.stat-justborder {\n        width: 100%;\n        min-height: 54px;\n\n        p {\n          margin: 0;\n        }\n\n        @media (max-width: 1024px) {\n          min-height: 38px;\n        }\n\n        &:not(:last-child) {\n          border-bottom: 1px solid #e0bfb8;\n        }\n\t\t\t\t\n\t\t\t\t.inner-stat {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\talign-items: center;\n\n\t\t\t\t\tb {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\talign-items: flex-end;\n\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\tfont-size:14px;\n\t\t\t\t\t}\n\t\t\t\t}\n      }\n    }\n\n    .stake-unstake-display {\n      width: 50%;\n\n      @media (max-width: 1024px) {\n        width: 100%;\n      }\n\n      input {\n        border-radius: 5px;\n        border: 1px solid black;\n        color: black;\n        text-align: center;\n        font-size: 17px;\n      }\n\n      .zap-stake-toggle {\n        display: inline-flex;\n\n        button {\n          width: 70px;\n          border: 1px solid #00cf87;\n        }\n\n        .zap-button {\n          border-radius: 15px 0 0 15px;\n        }\n\n        .stake-button {\n          border-radius: 0 15px 15px 0;\n        }\n      }\n\n      .stakeBox {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        .quickBtns {\n          width: 100%;\n\n          @media (max-width: 375px) {\n            button {\n              font-size: 14px;\n              width: 40px;\n            }\n          }\n        }\n\t\t\t\t\n\t\t\t\t.warning {\n\t\t\t\t\tcolor:red;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n      }\n\n      .unstakeBox {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        .quickBtns {\n          width: 100%;\n        }\n\t\t\t\t\n\t\t\t\t.warning {\n\t\t\t\t\tcolor:red;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n      }\n    }\n  }\n\n  .boosters {\n    .booster-headers {\n      display: flex;\n\n      .booster-header {\n        width: 70%;\n        height: 40px;\n        background: #00cf87;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 1px solid black;\n\n        p {\n          margin: 0;\n          color: black;\n          font-size: 18px;\n          font-weight: 600;\n        }\n      }\n    }\n\n    h3,\n    h4 {\n      color: white;\n    }\n\n    .approve-button {\n      .approve {\n        width: 250px;\n        background: #00cf87;\n        border-radius: 5px;\n        border: none;\n        margin: 10px;\n        color: black;\n        font-weight: 900;\n        height: 35px;\n        font-size: 16px;\n        &:hover {\n          background: #e0bfb8;\n          color: black;\n          font-size: 18px;\n          cursor: pointer;\n        }\n      }\n    }\n\n    .boosters-row {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 30px;\n\n      .term-boosters {\n        display: flex;\n        width: 100%;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img {\n          width: 80px;\n          height: 80px;\n          border-radius: 5px;\n          margin: 10px;\n          border: 1px solid #00cf87;\n          cursor: pointer;\n\n          @media (max-width: 585px) {\n            width: 50px;\n            height: 50px;\n          }\n\n          @media (max-width: 320px) {\n            width: 40px;\n            height: 40px;\n          }\n        }\n\n        .nft {\n          cursor: pointer;\n          width: 80px;\n          height: 80px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          background: white;\n          border-radius: 5px;\n          margin: 10px;\n          background: linear-gradient(\n            37deg,\n            rgba(0, 207, 135, 1) 0%,\n            rgba(224, 191, 184, 1) 16%,\n            rgba(133, 197, 164, 1) 34%,\n            rgba(224, 191, 184, 1) 51%,\n            rgba(45, 204, 145, 1) 68%,\n            rgba(224, 191, 184, 1) 83%,\n            rgba(0, 207, 135, 1) 100%\n          );\n\n          @media (max-width: 585px) {\n            width: 50px;\n            height: 50px;\n          }\n\n          @media (max-width: 320px) {\n            width: 40px;\n            height: 40px;\n          }\n\n          .nft-inner {\n            width: 95%;\n            height: 95%;\n            color: white;\n            background: rgba(0, 0, 0, 0.85);\n            border-radius: 5px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            p {\n              margin: 0;\n              font-size: 60px;\n              height: 135%;\n            }\n\n            &:hover {\n              color: #00cf87;\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
			var hn, jn = e => {
				let {
					poolId: n,
					address: t,
					contract: a,
					signer: i,
					prices: s,
					content: o,
					isLp: p,
					chainId: l,
					contractName: c,
					notify_warn: d,
					notify_success: u,
					poolInfo: m,
					tvl: y,
					userInfo: b,
					dbxRewards: x,
					vdbxRewards: g,
					dbcRewards: h,
					balance: j,
					allowance: f,
					dpr: w,
					apr: v,
					baseApr: T,
					lpTokenPrice: k,
					approve: A,
					stake: B,
					unstake: M,
					claim: C
				} = e;
				const [D, N] = Object(r.useState)(!1), [S, E] = Object(r.useState)(0), [I, R] = Object(r.useState)(0), [F, P] = Object(r.useState)(f), [L, W] = Object(r.useState)(!1), [X, H] = Object(r.useState)(!1), [z, Q] = Object(r.useState)(!1), [U, q] = Object(r.useState)(!1), [V, Y] = Object(r.useState)(!1), [K, G] = Object(r.useState)(!0);

				function Z(e) {
					return "$" + e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
				}
				const J = (e, n) => {
					var t = 0;
					"stake" === n && (t = xn(j)), "unstake" === n && (t = xn(b[1][0])), 0 === e && (t = xn(0)), 25 === e && (t = xn(t).mul(.25)), 50 === e && (t = xn(t).mul(.5)), 75 === e && (t = xn(t).mul(.75)), 100 === e && (t = xn(t).mul(1)), t = xn(t).div(1e18).toFixed(18).replace(/\.?0+$/, ""), "stake" === n && E(t), "unstake" === n && R(t)
				};
				return Object(O.jsxs)(gn, {
					children: [0 === b.length && Object(O.jsx)("div", {
						children: o.loadingFarm
					}), b.length > 0 && Object(O.jsx)("div", {
						className: "pool-header-two",
						onClick: () => {
							N(!D)
						},
						children: Object(O.jsx)("div", {
							className: "desktop-header",
							children: Object(O.jsxs)("div", {
								className: "vault-header-data",
								children: [p && Object(O.jsxs)("div", {
									className: "vault-logos",
									children: [Object(O.jsx)("img", {
										className: "tokenOneImg",
										src: "/images/tokenImages/" + m[0].split("-")[0] + ".svg"
									}), Object(O.jsx)("img", {
										className: "tokenTwoImg",
										src: "/images/tokenImages/" + m[0].split("-")[1] + ".svg"
									})]
								}), !p && Object(O.jsx)("div", {
									className: "vault-logos",
									children: Object(O.jsx)("img", {
										className: "tokenImg",
										src: "/images/tokenImages/" + m[0] + ".svg"
									})
								}), Object(O.jsx)("div", {
									className: "vault-title",
									children: Object(O.jsx)("p", {
										children: m[0]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column staked",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: o.staked
										}), Object(O.jsx)("p", {
											children: 0 === b.length ? 0 : Z(b[1][0] / 1e18 * k)
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column rewards",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: o.rewards
										}), Object(O.jsx)("p", {
											children: 8453 === l && 0 === parseInt(b[1][0]) ? 0 : 0 === b.length ? Z(0) : "RealYield" === c ? s.WETH * x >= .01 ? Z(s.WETH * x) : "< " + Z(.01) : s.DBX * x + s.DBC * h + s.DBX * g === 0 ? Z(0) : s.DBX * x + s.DBC * h + s.DBX * g >= .01 ? Z(s.DBX * x + s.DBC * h + s.DBX * g) : "< " + Z(.01) || !1
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column apr",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: "Vaults" === c ? o.apy : o.apr
										}), Object(O.jsx)("p", {
											children: 0 === b.length ? 0 : "".concat(Ee(v, 2), "%") || !1
										})]
									})
								}), "Vaults" !== c && Object(O.jsx)("div", {
									className: "vault-header-data-column dpr",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: o.dpr
										}), Object(O.jsx)("p", {
											children: 0 === b.length ? 0 : "".concat(Ee(w, 2), "%") || !1
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column tvl",
									children: Object(O.jsxs)("div", {
										className: "column-data",
										children: [Object(O.jsx)("p", {
											children: o.tvl
										}), Object(O.jsx)("p", {
											children: Z(k * y)
										})]
									})
								}), Object(O.jsx)("div", {
									className: "vault-header-data-column open-close",
									children: D ? Object(O.jsx)(sn.a, {}) : Object(O.jsx)(an.a, {})
								})]
							})
						})
					}), D && 8453 === l && Object(O.jsxs)("div", {
						className: "expanded",
						children: [parseInt(b[1][0]) > 0 && Object(O.jsxs)(O.Fragment, {
							children: [Object(O.jsx)("b", {
								children: "We have closed our vaults! Click the following button to unstake and claim your rewards"
							}), Object(O.jsx)(be, {
								width: "200px",
								onclick: () => {
									M(n, 0, Y)
								},
								text: U ? "Migrating" : "Migrate"
							})]
						}), 0 === parseInt(b[1][0]) && Object(O.jsx)("b", {
							children: "We have closed our vaults! See discord for more information!"
						})]
					}), D && 8453 !== l && Object(O.jsxs)("div", {
						className: "expanded",
						children: [Object(O.jsx)("div", {
							className: "claimBox",
							children: Object(O.jsx)(be, {
								onclick: () => {
									C(b[1][0], n, H)
								},
								text: X ? o.harvesting : o.harvest.replace("%dollarAmount%", "RealYield" === c ? s.WETH * x >= .01 ? Z(s.WETH * x) : "< " + Z(.01) : s.DBX * x + s.DBC * h + s.DBX * g === 0 ? Z(0) : s.DBX * x + s.DBC * h + s.DBX * g >= .01 ? Z(s.DBX * x + s.DBC * h + s.DBX * g) : "< " + Z(.01))
							})
						}), Object(O.jsxs)("div", {
							className: "outerBox",
							children: [Object(O.jsxs)("div", {
								className: "pool-data",
								children: [Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: o.rewards
									}), Object(O.jsxs)("div", {
										children: ["RealYield" === c && Object(O.jsxs)("p", {
											children: [Ee(x, 6), " WETH"]
										}), "RealYield" !== c && Object(O.jsxs)("p", {
											children: [Ee(x, 6), " DBX"]
										}), h > 0 && Object(O.jsxs)("p", {
											children: [Ee(h, 6), " DBC"]
										}), g > 0 && Object(O.jsxs)("p", {
											children: [Ee(g, 6), " vDBX"]
										}), "RealYield" === c && Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: s.WETH * x >= .01 ? Z(s.WETH * x) : "< " + Z(.01)
										}), "RealYield" !== c && Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: s.DBX * x + s.DBC * h + s.DBX * g === 0 ? Z(0) : s.DBX * x + s.DBC * h + s.DBX * g >= .01 ? Z(s.DBX * x + s.DBC * h + s.DBX * g) : "< " + Z(.01)
										})]
									})]
								}), Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: o.staked
									}), Object(O.jsxs)("div", {
										children: [Object(O.jsxs)("p", {
											children: [0 === b.length ? 0 : xn(b[1][0]).div(1e18).toFixed(18).replace(/\.?0+$/, ""), " ", m[0]]
										}), Object(O.jsxs)("p", {
											style: {
												fontSize: "12px"
											},
											children: ["$", Re(xn(b[1][0]).div(1e18).mul(k), 2)]
										})]
									})]
								}), "Vaults" === c && Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsxs)("p", {
										children: ["Base ", o.apr]
									}), Object(O.jsxs)("p", {
										children: [Ee(T, 2), "%"]
									})]
								}), Object(O.jsxs)("div", {
									className: "stat-justborder",
									children: [Object(O.jsxs)("div", {
										className: "inner-stat",
										children: [Object(O.jsx)("p", {
											children: "Vaults" === c ? o.apy : o.apr
										}), Object(O.jsxs)("p", {
											children: [Ee(v, 2), "%"]
										})]
									}), "Vaults" === c && Object(O.jsx)("div", {
										className: "inner-stat",
										children: Object(O.jsx)("b", {
											children: "APY represents the percentage earned over a year of not harvesting and only compounding"
										})
									})]
								}), "Vaults" !== c && Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: o.dpr
									}), Object(O.jsx)("div", {
										children: Object(O.jsxs)("p", {
											style: {
												fontSize: "12px"
											},
											children: [Ee(w, 2), "%"]
										})
									})]
								}), Object(O.jsxs)("div", {
									className: "stat",
									children: [Object(O.jsx)("p", {
										children: o.tvl
									}), Object(O.jsxs)("div", {
										children: [Object(O.jsxs)("p", {
											style: {
												fontSize: "12px"
											},
											children: [Ee(y, 6), " ", m[0]]
										}), Object(O.jsx)("p", {
											style: {
												fontSize: "12px"
											},
											children: Z(k * y)
										})]
									})]
								})]
							}), Object(O.jsxs)("div", {
								className: "stake-unstake-display",
								children: [Object(O.jsxs)("div", {
									className: "zap-stake-toggle",
									children: [Object(O.jsx)("button", {
										style: {
											background: K ? "#00cf87" : "black",
											color: K ? "black" : "#00cf87"
										},
										className: "zap-button",
										onClick: () => G(!0),
										children: o.stake
									}), Object(O.jsx)("button", {
										style: {
											background: K ? "black" : "#00cf87",
											color: K ? "#00cf87" : "black"
										},
										className: "stake-button",
										onClick: () => G(!1),
										children: o.unstake
									})]
								}), K ? Object(O.jsxs)("div", {
									className: "stakeBox",
									children: [Object(O.jsx)("b", {
										children: o.stake
									}), Object(O.jsx)("input", {
										type: "number",
										value: S,
										onChange: e => {
											E(e.target.value)
										}
									}), Object(O.jsx)("p", {
										children: o.balance.replace("%balance%", xn(j).div(1e18).toFixed(18)).replace("%currency%", m[0])
									}), Object(O.jsxs)("div", {
										className: "quickBtns",
										children: [Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												J(0, "stake")
											},
											text: "0%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												J(25, "stake")
											},
											text: "25%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												J(50, "stake")
											},
											text: "50%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												J(75, "stake")
											},
											text: "75%"
										}), Object(O.jsx)(be, {
											margin: "10px 4px",
											width: "48px",
											onclick: () => {
												J(100, "stake")
											},
											text: "100%"
										})]
									}), F >= S && Object(O.jsx)(be, {
										width: "200px",
										onclick: () => {
											B(n, S, j, Q)
										},
										text: "".concat(z ? o.staking : o.stake)
									}), F < S && Object(O.jsx)(be, {
										width: "200px",
										onclick: () => {
											A(m[1], W, P)
										},
										text: L ? o.approving : o.approve
									}), "Vaults" === c && Object(O.jsx)("b", {
										className: "warning",
										children: o.stakingWarning
									})]
								}) : Object(O.jsxs)("div", {
									className: "unstakeBox",
									children: [Object(O.jsx)("b", {
										children: o.unstake
									}), Object(O.jsx)("input", {
										type: "number",
										value: I,
										onChange: e => {
											R(e.target.value)
										}
									}), Object(O.jsxs)("p", {
										children: [o.staked, " ", 0 === b.length ? 0 : xn(b[1][0]).div(1e18).toFixed(18).replace(/\.?0+$/, ""), " ", m[0]]
									}), Object(O.jsxs)("div", {
										className: "quickBtns",
										children: [Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												J(0, "unstake")
											},
											text: "0%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												J(25, "unstake")
											},
											text: "25%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												J(50, "unstake")
											},
											text: "50%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												J(75, "unstake")
											},
											text: "75%"
										}), Object(O.jsx)(be, {
											width: "50px",
											onclick: () => {
												J(100, "unstake")
											},
											text: "100%"
										})]
									}), Object(O.jsx)(be, {
										width: "200px",
										onclick: () => {
											M(n, I, q)
										},
										text: "".concat(U ? o.unstaking : o.unstake)
									}), parseInt(b[1][0]) > 0 && parseInt(b[1][3]) + 259200 > Date.now() / 1e3 && "Vaults" === c && Object(O.jsx)("b", {
										className: "warning",
										children: o.unstakingWarning
									})]
								})]
							})]
						})]
					})]
				})
			};
			const {
				ethers: fn
			} = t(33), wn = y.a.div(hn || (hn = Object(d.a)(["\n  padding: 10px 50px;\n  z-index: 0;\n  width: 100%;\n  min-height: 70vh;\n\t\n\th2 {\n\t\tcolor: #00cf87;\n    text-shadow: 3px 3px 0px black;\n    margin-bottom: 25px;\n    font-weight: bold;\n    text-align: center;\n\t}\n\n  @media (max-width: 1025px) {\n    padding-top: 50px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 40px 20px;\n  }\n\t\n\t.content {\n    .farm-filters {\n      border-bottom: 1px solid darkgray;\n      padding: 20px 0;\n      margin-bottom: 20px;\n      display: flex;\n\n      .staked-toggle {\n        box-shadow: 0px 0px 10px #e0bfb8;\n        width: 180px;\n        border-radius: 10px;\n\n        button {\n          width: 90px;\n          border: none;\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.9);\n\t\t\t\t\tborder-radius: 0 10px 10px 0;\n        }\n\t\t\t\t\n\t\t\t\t.active-left {\n          width: 90px;\n\t\t\t\t\tbackground: #00cf87;\n\t\t\t\t\tborder-radius: 10px 0 0 10px;\n\t\t\t\t\tborder-right: 1px solid darkgrey;\n\t\t\t\t}\n\t\t\t\t.active-right {\n          width: 90px;\n\t\t\t\t\tbackground: #00cf87;\n\t\t\t\t\tborder-radius: 0 10px 10px 0;\n\t\t\t\t\tborder-left: 1px solid darkgrey;\n\t\t\t\t}\n      }\n\n      .sort-by {\n        margin-left: 20px;\n        display: flex;\n        align-items: center;\n\n        p {\n          margin: 0 10px 0 0;\n        }\n\n        select {\n          box-shadow: 0px 0px 10px #e0bfb8;\n          color: white;\n          background: rgba(0, 0, 0, 0.9);\n          border-radius: 10px;\n          width: 100px;\n        }\n      }\n    }\n  }\n"])));
			var vn, On = function(e) {
				let {
					web3Modal: n,
					loadWeb3Modal: t,
					logoutOfWeb3Modal: a,
					setPageTitle: i,
					language: s,
					address: o,
					contract: p,
					signer: l,
					prices: c,
					chainId: d
				} = e;
				const [u, m] = Object(r.useState)(!0), [y, b] = Object(r.useState)([]), [g, h] = Object(r.useState)(""), j = ["function approve(address spender, uint amount) external returns (bool)", "function balanceOf(address account) external view returns (uint256)", "function allowance(address owner, address spender) external view returns (uint256)"], f = x.farm[s], w = x.pageTitles[s].vaults, [v, T] = Object(r.useState)([]), [k, A] = Object(r.useState)(!1), [B, M] = Object(r.useState)("default"), [C, D] = Object(r.useState)(!1), N = e => me.b.warn(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				}), S = e => me.b.success(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				}), E = async() => {
					try {
						var e;
						if (8453 === d) {
							const n = p.MultiCall.connect(l).getAllVaultInfo;
							e = await n(o)
						} else {
							var t = {
								account: "0x0000000000000000000000000000000000000000"
							};
							n.cachedProvider && (t = {
								account: o
							}), e = await Ie(d, "MultiCall", "getAllVaultInfo", t)
						}
						I(e[0]);
						var a = e[1],
							i = e[2];
						let W = [];
						for (let e = 0; e < a.length; e++) {
							var s = a[e],
								r = parseInt(s[9]),
								u = parseInt(s[4]),
								y = c[s[1][0]],
								x = parseInt(s[5]),
								g = parseInt(s[3]) / 1e18,
								h = parseInt(s[6]) / 1e3,
								j = g * h * parseInt(s[1][3]) / x * 86400 * c.DBX,
								f = g * h * parseInt(s[1][3]) / x * 31536e3 * c.DBX,
								w = u / 1e18 * y,
								v = j / 24,
								O = s[7],
								k = parseInt(s[8]),
								A = (c.DBX, g * h * parseInt(O[3]) / x * 3600 / (k / 1e18) + 1);
							f = (f = v * ((A ** 8760 - 1) / (A - 1))) * r / 100;
							var M = Math.floor(f / w * 100 * 1e3) / 1e3;
							f = (f = g * h * parseInt(s[1][3]) / x * 31536e3 * c.DBX) * r / 100;
							var N = Math.floor(f / w * 100 * 1e3) / 1e3,
								S = (w = parseInt(s[2]) / 1e18, i[e]),
								E = parseInt(S[2]) / 1e18,
								R = parseInt(S[3]) / 1e18,
								F = parseInt(S[4]) / 1e18,
								P = S[5],
								L = parseInt(S[6]) / 1e18;
							let n = {};
							n.poolId = s[0], n.poolInfo = s[1], n.tvl = w, n.user = S, n.dbxRewards = E, n.vdbxRewards = F, n.dbcRewards = R, n.balance = P, n.allowance = L, n.dpr = null, n.apr = M, n.baseApr = N, n.lpTokenPrice = y, W.push(n)
						}
						b([...W]), C ? X(B) : (D(!0), T([...W])), m(!1)
					} catch (W) {
						console.log(W)
					}
				}, I = async e => {
					try {
						var n = Math.floor(Date.now() / 1e3) - parseInt(e);
						n < 0 && (n = 0);
						var t = Math.floor(n / 3600);
						n -= 3600 * t;
						var a = Math.floor(n / 60),
							i = "0s";
						t > 0 && (i = t + "h"), a > 0 && (i = "0s" === i ? a + "m" : i + " " + a + "m"), (n -= 60 * a) > 0 && (i = "0s" === i ? n + "s" : i + " " + n + "s"), h(i)
					} catch (s) {
						console.log(s)
					}
				}, R = async(e, t, a) => {
					if (n.cachedProvider) try {
						t(!0);
						let n = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
						const i = new fn.Contract(e, j, l).connect(l).approve,
							s = await i(p.Vaults.address, n.toString());
						await s.wait(), a(1157920892373162e62), S(f.approveSuccess), t(!1)
					} catch (i) {
						console.log(i), t(!1), N(i.reason), console.log(i.reason)
					} else N("Connect wallet first")
				}, F = async(e, t, a, i) => {
					if (n.cachedProvider)
						if (0 === t) N(f.zeroStakeErr);
						else try {
							i(!0);
							const n = p.Vaults.connect(l).deposit,
								a = await n(e, Object(tn.d)(t.toString(), 18));
							await a.wait(), E(), S(f.stakeSuccess), i(!1)
						} catch (s) {
							i(!1), N(s.reason), console.log(s)
						} else N("Connect wallet first")
				}, P = async(e, t, a) => {
					if (n.cachedProvider) try {
						if (a(!0), 8453 === d) {
							const n = p.Vaults.connect(l).unstake;
							await n(e, o)
						} else {
							const n = p.Vaults.connect(l).withdraw;
							await n(e, Object(tn.d)(t.toString(), 18))
						}
						await hash.wait(), E(), S(f.unstakeSuccess), a(!1)
					} catch (i) {
						a(!1), N(i.reason), console.log(i)
					} else N("Connect wallet first")
				}, L = async(e, t, a) => {
					if (n.cachedProvider)
						if (0 === e) N(f.zeroClaimErr);
						else try {
							a(!0);
							const e = p.Vaults.connect(l).harvest,
								n = await e(t);
							await n.wait(), E(), S(f.claimSuccess), a(!1)
						} catch (i) {
							console.log(i), N(i.reason), a(!1), console.log(i)
						} else N("Connect wallet first")
				}, W = e => {
					if (A(e), e) {
						let n = e ? y.filter((e => e.user[1][0] / 1e18 > 0)) : y;
						T([...n])
					} else T([...y])
				}, X = e => {
					M(e);
					let n = (k ? y.filter((e => e.user[1][0] / 1e18 > 0)) : y).sort((function(n, t) {
						if ("name" === e) return n.poolInfo[0].localeCompare(t.poolInfo[0]);
						if ("staked" === e) {
							let e = n.user[1][0] / 1e18;
							return t.user[1][0] / 1e18 - e
						}
						if ("apy" === e) {
							let e = n.apr;
							return t.apr - e
						}
						if ("tvl" === e) {
							let e = n.tvl * n.lpTokenPrice;
							return t.tvl * t.lpTokenPrice - e
						}
					}));
					if ("default" === e)
						if (k) {
							let e = k ? y.filter((e => e.user[1][0] / 1e18 > 0)) : y;
							T([...e])
						} else T([...y]);
					else T([...n])
				};
				let H;
				return Object(r.useEffect)((() => {
					i(w), 0 === y.length && (n.cachedProvider && o && p || !n.cachedProvider && 8453 !== d) && (E(), H ? (clearInterval(H), H = setInterval((() => {
						E()
					}), 6e4)) : H = setInterval((() => {
						E()
					}), 6e4))
				}), [o, p, c]), Object(O.jsxs)(wn, {
					children: [Object(O.jsx)(le, {
						title: w
					}), Object(O.jsx)("h2", {
						children: f.lastCompounded.replace("%time%", g)
					}), u && Object(O.jsx)("div", {
						className: "content",
						children: f.loadingFarm
					}), !u && Object(O.jsxs)("div", {
						className: "content",
						children: [Object(O.jsxs)("div", {
							className: "farm-filters",
							children: [Object(O.jsxs)("div", {
								className: "staked-toggle",
								children: [Object(O.jsx)("button", {
									className: k ? "" : "active-left",
									onClick: () => W(!1),
									children: "All"
								}), Object(O.jsx)("button", {
									className: k ? "active-right" : "",
									onClick: () => W(!0),
									children: "Staked"
								})]
							}), Object(O.jsxs)("div", {
								className: "sort-by",
								children: [Object(O.jsx)("p", {
									children: "Sort By:"
								}), Object(O.jsxs)("select", {
									onChange: e => X(e.target.value),
									children: ["default" === B && Object(O.jsx)("option", {
										children: "Default"
									}), Object(O.jsx)("option", {
										value: "name",
										children: "Name"
									}), Object(O.jsx)("option", {
										value: "staked",
										children: "Staked"
									}), Object(O.jsx)("option", {
										value: "apy",
										children: "APY"
									}), Object(O.jsx)("option", {
										value: "tvl",
										children: "TVL"
									})]
								})]
							})]
						}), v.map(((e, n) => Object(O.jsx)(jn, {
							poolId: e.poolId,
							address: o,
							contract: p,
							signer: l,
							prices: c,
							content: f,
							isLp: !0,
							chainId: d,
							contractName: "Vaults",
							notify_warn: N,
							notify_success: S,
							poolInfo: e.poolInfo,
							tvl: e.tvl,
							userInfo: e.user,
							dbxRewards: e.dbxRewards,
							vdbxRewards: e.vdbxRewards,
							dbcRewards: e.dbcRewards,
							balance: e.balance,
							allowance: e.allowance,
							dpr: e.dpr,
							apr: e.apr,
							baseApr: e.baseApr,
							lpTokenPrice: e.lpTokenPrice,
							approve: R,
							stake: F,
							unstake: P,
							claim: L
						}, n)))]
					}), Object(O.jsx)(me.a, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						newestOnTop: !1,
						closeOnClick: !0,
						rtl: !1,
						pauseOnFocusLoss: !0,
						draggable: !0,
						pauseOnHover: !0
					})]
				})
			};
			const {
				ethers: Tn
			} = t(33), kn = t(136), An = y.a.div(vn || (vn = Object(d.a)(['\n  width: 80%;\n  padding: 0 50px 0;\n\n  @media (max-width: 1025px) {\n    padding-top: 50px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 40px 20px;\n  }\n\n  .MastermindBox {\n    justify-content: center;\n    margin: 20px 0;\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 10px;\n    box-shadow: 0px 0px 10px #e0bfb8;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n    \n    .progress-bar {\n      color: white;\n      background: black;\n      border: solid 1px white;\n      border-radius: 20px;\n      \n      .progress {\n        background: rgb(0,207,135);\n        display: flex;\n        justify-content: center;\n        border-radius: 20px;\n      }\n    }\n      \n    .progress-labels {\n      color: white;\n      display: flex;\n      justify-content: space-between;\n    }\n    \n    .pools {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      \n      label {\n        padding 10px;\n      }\n    }\n    \n    .menu {\n      border: 1px solid white;\n      border-left: 0;\n      border-right: 0;\n      display: flex;\n      justify-content: space-around;\n      font-weight: bold;\n      font-size: 17px;\n      cursor: pointer;\n      \n      .active {\n        background-color: rgb(0,207,135);\n        color: black;\n      }\n      \n      div {\n        border-right: 1px solid;\n        width: 100%;\n        padding: 10px;\n      }\n      \n      div:last-child {\n        border-right: 0;        \n      }\n    }\n\n    p {\n      font-size: 12px;\n    }\n\n    .rewards {\n      border-top: 1px solid grey;\n      padding: 20px 0 0 0;\n      \n      .claimBox {\n        display: grid;\n      }\n    }\n\n    button {\n      background-color: black;\n      border-radius: 10px;\n      min-width: 40%;\n      color: rgb(0, 207, 135);\n      font-size: 17px;\n      font-weight: bold;\n      cursor: pointer;\n      height: 45px;\n      border: 1px solid rgb(0, 207, 135);\n    }\n\n    input::-webkit-outer-spin-button,\n    input::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n\n    input[type="number"] {\n      -moz-appearance: textfield;\n    }\n\n    input {\n      border-radius: 5px;\n      border: 1px solid black;\n      color: black;\n      text-align: center;\n      font-size: 17px;\n      margin-bottom: 10px;\n    }\n    \n    .loyaltyBox {\n      min-height: 225px;\n\n      .column-headers {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        \n        @media (max-width: 425px) {\n          display: none;\n        }\n\n        .c-header {\n          width: 100%;\n          border: 1px solid rgb(5, 40, 1);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          padding: 5px;\n\n          p {\n            margin: 0;\n            color: white;\n            font-size: 16px;\n            color: rgb(0,207,135);\n            font-weight: bold;\n          }\n        }\n      }\n      \n      .column-cells {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        \n        @media (max-width: 425px) {\n          flex-direction: column;\n        }\n        \n        .cell {\n          padding: 5px;\n          width: 100%;\n          border: 1px solid rgb(5, 40, 1);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-direction: column;\n\n          p {\n            margin: 0;\n            color: white;\n          }\n          .explainer {\n            color: rgb(0,207,135);\n            font-weight: bold;\n            \n            @media (min-width: 425px) {\n              display: none;\n            }\n          }\n          \n          .first {\n            color: rgb(0,207,135);\n            font-weight: bold;\n          }\n        }\n\n        &:last-child {\n          border-radius: 0 0 10px 10px;\n          overflow: overlay;\n\n          .cell {\n            &:first-child {\n              border-radius: 0 0 0 10px;\n            }\n            &:last-child {\n              border-radius: 0 0 10px 0;\n            }\n          }\n        }\n      }\n    }\n  }\n'])));
			var Bn, Mn, Cn, Dn = function(e) {
				let {
					web3Modal: n,
					loadWeb3Modal: t,
					logoutOfWeb3Modal: a,
					setPageTitle: i,
					language: s,
					address: o,
					contract: p,
					signer: l,
					prices: c,
					chainId: d
				} = e;
				const [u, m] = Object(r.useState)("loyalty"), [y, b] = Object(r.useState)(0), [g, h] = Object(r.useState)(0), [j, f] = Object(r.useState)(0), [w, v] = Object(r.useState)(!1), [T, k] = Object(r.useState)(!1), [A, B] = Object(r.useState)(!1), [M, C] = Object(r.useState)(!1), [D, N] = Object(r.useState)(!1), [S, E] = Object(r.useState)(0), [I, R] = Object(r.useState)(0), [F, P] = Object(r.useState)(0), [L, W] = Object(r.useState)(0), [X, H] = Object(r.useState)(0), [z, Q] = Object(r.useState)(0), [U, q] = Object(r.useState)(0), [V, Y] = Object(r.useState)(0), [K, G] = Object(r.useState)(!1), [Z, J] = Object(r.useState)(!1), [$, ee] = Object(r.useState)(!1), [ne, te] = Object(r.useState)(0), [ae, ie] = Object(r.useState)(null), [se, re] = Object(r.useState)([]), [oe, pe] = Object(r.useState)(""), [ce, de] = Object(r.useState)(0), ue = x.mastermind[s], ye = x.pageTitles[s].mastermind, xe = ["function approve(address spender, uint amount) external returns (bool)", "function balanceOf(address account) external view returns (uint256)", "function allowance(address owner, address spender) external view returns (uint256)"], ge = e => me.b.warn(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				}), he = e => me.b.success(e, {
					position: "top-right",
					autoClose: 5e3,
					hideProgressBar: !1,
					closeOnClick: !0,
					pauseOnHover: !0,
					draggable: !0,
					progress: void 0
				}), je = async() => {
					try {
						var e;
						if (8453 === d) {
							const n = p.MultiCall.connect(l).getMastermind;
							e = await n(o)
						} else {
							var t = {
								_account: "0x0000000000000000000000000000000000000000"
							};
							n.cachedProvider && (t = {
								_account: o
							}), e = await Ie(d, "MultiCall", "getMastermind", t)
						}
						var a = e[0];
						re(e[1]), ie(a), b(Re(kn(a[0]).div(1e18), 18)), f(Re(kn(a[1]).div(1e18), 18)), h(Re(kn(a[11]).div(1e18), 18)), W(Re(kn(a[2]).div(1e18), 18)), q(parseInt(a[3])), P(Re(kn(a[4]).div(1e18), 18)), Q(parseInt(a[5])), H(Re(kn(a[12]).div(1e6), 18)), Y(parseInt(a[13]));
						var i = parseInt(Re(kn(a[6]), 0));
						pe(i), parseInt(a[2]) > 0 && de(Re(kn(a[2]).div(a[7 + i]), 0))
					} catch (s) {
						console.log(s)
					}
				}, fe = async e => {
					if (n.cachedProvider) try {
						var t = "";
						if ("DBX" === e) G(!0), _[d][0].tokens.map((n => {
							n.name === e && (t = n.address)
						}));
						if ("USDC" === e) ee(!0), _[d][0].tokens.map((n => {
							n.name === e && (t = n.address)
						}));
						if ("vDBX" === e && (J(!0), t = p.vDBX.address), "" !== t) {
							let n = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
							const a = new Tn.Contract(t, xe, l).connect(l).approve,
								i = await a(p.Mastermind.address, n.toString());
							await i.wait(), "DBX" === e && Q(1157920892373162e62), "vDBX" === e && q(1157920892373162e62), "USDC" === e && Y(1157920892373162e62), he("approved")
						} else ge("Not found");
						G(!1), J(!1), ee(!1)
					} catch (a) {
						console.log(a), G(!1), J(!1), ee(!1), ge(a.reason), console.log(a.reason)
					} else ge("Connect wallet first")
				};
				return Object(r.useEffect)((() => {
					(n.cachedProvider && o && p || !n.cachedProvider && 8453 !== d) && je()
				}), [o, p, l]), Object(r.useEffect)((() => {
					i(ye)
				}), []), Object(O.jsxs)(An, {
					children: [Object(O.jsx)(le, {
						title: ye
					}), Object(O.jsx)("h2", {
						children: "Buy, Hold or Vest vDBX!"
					}), !ae && Object(O.jsx)("div", {
						className: "MastermindBox",
						children: Object(O.jsx)("p", {
							children: ue.loadingWait
						})
					}), ae && Object(O.jsxs)("div", {
						className: "MastermindBox",
						children: [Object(O.jsxs)("div", {
							className: "menu",
							children: [Object(O.jsx)("div", {
								className: "loyalty" === u ? "active" : "inactive",
								onClick: () => {
									m("loyalty")
								},
								children: "Loyalty"
							}), Object(O.jsx)("div", {
								className: "vest" === u ? "active" : "inactive",
								onClick: () => {
									m("vest")
								},
								children: "Vest vDBX"
							}), Object(O.jsx)("div", {
								className: "buy" === u ? "active" : "inactive",
								onClick: () => {
									m("buy")
								},
								children: "Buy vDBX"
							})]
						}), "loyalty" === u && Object(O.jsxs)("div", {
							className: "loyaltyBox",
							children: [Object(O.jsx)("h2", {
								children: "DBX Loyalty Program"
							}), Object(O.jsx)("p", {
								children: "Hold vDBX to receive incredible perks with DBX!"
							}), Object(O.jsxs)("b", {
								children: ["Your current tier: ", 4 === oe ? "Diamond" : 3 === oe ? "Gold" : 2 === oe ? "Silver" : 1 === oe ? "Bronze" : "No Tier"]
							}), Object(O.jsx)("div", {
								className: "progress-bar",
								children: Object(O.jsxs)("div", {
									className: "progress",
									style: {
										width: "".concat(ce, "%")
									},
									children: [ce, "%"]
								})
							}), Object(O.jsxs)("div", {
								className: "progress-labels",
								children: [Object(O.jsxs)("p", {
									children: [Re(kn(ae[17]).div(1e18).add(L), 2), " vDBX"]
								}), Object(O.jsxs)("b", {
									children: ["Next tier: ", oe + 1 === 4 ? "Diamond" : oe + 1 === 3 ? "Gold" : oe + 1 === 2 ? "Silver" : oe + 1 === 1 ? "Bronze" : "No Tier"]
								}), Object(O.jsxs)("p", {
									children: [Re(kn(ae[7]).div(1e18), 0), " vDBX"]
								})]
							}), Object(O.jsxs)("div", {
								className: "column-headers",
								children: [Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {})
								}), Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {
										children: "No Tier"
									})
								}), Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {
										children: "Bronze"
									})
								}), Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {
										children: "Silver"
									})
								}), Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {
										children: "Gold"
									})
								}), Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {
										children: "Diamond"
									})
								})]
							}), Object(O.jsxs)("div", {
								className: "column-cells",
								children: [Object(O.jsx)("div", {
									className: "cell",
									children: Object(O.jsx)("p", {
										className: "first",
										children: "Requirements"
									})
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "No Tier"
									}), Object(O.jsx)("p", {
										children: "0 vDBX"
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Bronze Tier"
									}), Object(O.jsxs)("p", {
										children: [Re(kn(ae[7]).div(1e18), 0), " vDBX"]
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Silver Tier"
									}), Object(O.jsxs)("p", {
										children: [Re(kn(ae[8]).div(1e18), 0), " vDBX"]
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Gold Tier"
									}), Object(O.jsxs)("p", {
										children: [Re(kn(ae[9]).div(1e18), 0), " vDBX"]
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Diamond Tier"
									}), Object(O.jsxs)("p", {
										children: [Re(kn(ae[10]).div(1e18), 0), " vDBX"]
									})]
								})]
							}), Object(O.jsx)("div", {
								className: "column-headers",
								children: Object(O.jsx)("div", {
									className: "c-header",
									children: Object(O.jsx)("p", {
										children: "PERKS"
									})
								})
							}), [{
								name: "Launchpad Discounts",
								noTier: "x",
								bronze: "\u2713",
								silver: "\u2713",
								gold: "\u2713",
								diamond: "\u2713"
							}, {
								name: "DegenBrains NFT Staking (per NFT)*",
								noTier: "1.36 vDBX per day",
								bronze: "1.36 vDBX per day",
								silver: "1.7 vDBX per day",
								gold: "2.04 vDBX per day",
								diamond: "2.72 vDBX per day"
							}, {
								name: "DegenPlanets Farms Boosting*",
								noTier: "TBC",
								bronze: "TBC",
								silver: "TBC",
								gold: "TBC",
								diamond: "TBC"
							}, {
								name: "DegenGhouls Vaults Boosting (per NFT)*",
								noTier: "1%",
								bronze: "2%",
								silver: "3%",
								gold: "4%",
								diamond: "5%"
							}, {
								name: "Free Lottery Entries (per draw)*",
								noTier: "x",
								bronze: "x",
								silver: "1",
								gold: "11",
								diamond: "60"
							}, {
								name: "Casino Discount*",
								noTier: "x",
								bronze: "1%",
								silver: "2%",
								gold: "4%",
								diamond: "5%"
							}, {
								name: "Galaxy V2 Discounts*",
								noTier: "x",
								bronze: "1%",
								silver: "2%",
								gold: "5%",
								diamond: "10%"
							}, {
								name: "Galaxy V2 Conversion Rate (per 1k gems)*",
								noTier: "x",
								bronze: "1 vDBX",
								silver: "5 vDBX",
								gold: "50 vDBX",
								diamond: "500 vDBX"
							}].map(((e, n) => Object(O.jsxs)("div", {
								className: "column-cells",
								children: [Object(O.jsx)("div", {
									className: "cell",
									children: Object(O.jsx)("p", {
										className: "first",
										children: e.name
									})
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "No Tier"
									}), Object(O.jsx)("p", {
										children: e.noTier
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Bronze Tier"
									}), Object(O.jsx)("p", {
										children: e.bronze
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Silver Tier"
									}), Object(O.jsx)("p", {
										children: e.silver
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Gold Tier"
									}), Object(O.jsx)("p", {
										children: e.gold
									})]
								}), Object(O.jsxs)("div", {
									className: "cell",
									children: [Object(O.jsx)("p", {
										className: "explainer",
										children: "Diamond Tier"
									}), Object(O.jsx)("p", {
										children: e.diamond
									})]
								})]
							}, n))), Object(O.jsx)("p", {
								children: "* coming soon..."
							})]
						}), "vest" === u && Object(O.jsxs)("div", {
							className: "vest",
							children: [Object(O.jsx)("h2", {
								children: "Vest vDBX to get DBX"
							}), Object(O.jsx)("p", {
								children: "Vesting has been disabled."
							}), Object(O.jsxs)("div", {
								className: "rewards",
								children: [Object(O.jsx)("h4", {
									children: ue.vestRewards
								}), Object(O.jsxs)("p", {
									children: [ue.currentVest, " $", (y * c.DBX).toFixed(2), " (", y, " $DBX)"]
								}), Object(O.jsxs)("div", {
									className: "claimBox",
									children: [Object(O.jsx)(be, {
										text: w ? ue.claiming : ue.claim + " $" + (g * c.DBX).toFixed(2) + " (" + g + " $DBX)",
										onclick: async() => {
											if (n.cachedProvider) try {
												v(!0);
												const e = p.Mastermind.connect(l).withdraw,
													n = await e();
												await n.wait();
												const t = await je();
												await t, v(!1), he(ue.withdrawlSuccess)
											} catch (e) {
												v(!1), ge(e.reason), console.log(e.reason)
											} else ge("Connect wallet first")
										}
									}), j > 0 && Object(O.jsxs)(O.Fragment, {
										children: [Object(O.jsx)("p", {
											children: "You have some rewards in our old vesting feature"
										}), Object(O.jsx)(be, {
											text: T ? ue.claiming : ue.claim + " $" + (j * c.DBX).toFixed(2) + " (" + j + " $DBX)",
											onclick: async() => {
												if (n.cachedProvider) try {
													k(!0);
													const e = p.vDBX.connect(l).withdraw,
														n = await e();
													await n.wait();
													const t = await je();
													await t, k(!1), he(ue.withdrawlSuccess)
												} catch (e) {
													k(!1), ge(e.reason), console.log(e.reason)
												} else ge("Connect wallet first")
											}
										})]
									})]
								})]
							})]
						}), "buy" === u && Object(O.jsxs)("div", {
							className: "buy",
							children: [Object(O.jsx)("h2", {
								children: "Buy vDBX"
							}), Object(O.jsxs)("div", {
								children: [Object(O.jsxs)("p", {
									children: ["DBX Balance: ", F, " DBX"]
								}), Object(O.jsxs)("p", {
									children: ["USDC Balance: ", X, " USDC"]
								})]
							}), Object(O.jsx)("p", {
								children: "Enter the amount of DBX/USDC to trade:"
							}), Object(O.jsx)("input", {
								type: "number",
								value: I,
								onChange: e => {
									R(e.target.value)
								}
							}), Object(O.jsxs)("div", {
								children: [z >= I && Object(O.jsx)(be, {
									text: M ? "Buying..." : "Buy vDBX with DBX",
									onclick: async() => {
										if (n.cachedProvider) try {
											C(!0);
											const e = p.Mastermind.connect(l).buy,
												n = await e(BigInt(1e18 * I).toString());
											await n.wait();
											const t = await je();
											await t, he(ue.vestSuccess), C(!1)
										} catch (e) {
											C(!1), ge(e.reason), console.log(e.reason)
										} else ge("Connect wallet first")
									}
								}), z < I && Object(O.jsx)(be, {
									text: K ? "Approving..." : "Approve DBX",
									onclick: () => {
										fe("DBX")
									}
								}), V >= I && Object(O.jsx)(be, {
									text: D ? "Buying..." : "Buy vDBX with USDC",
									onclick: async() => {
										if (n.cachedProvider) try {
											N(!0);
											const e = p.Mastermind.connect(l).buyUSDC,
												n = await e(BigInt(1e6 * I).toString());
											await n.wait();
											const t = await je();
											await t, he(ue.vestSuccess), N(!1)
										} catch (e) {
											N(!1), ge(e.reason), console.log(e.reason)
										} else ge("Connect wallet first")
									}
								}), V < I && Object(O.jsx)(be, {
									text: $ ? "Approving..." : "Approve USDC",
									onclick: () => {
										fe("USDC")
									}
								})]
							}), Object(O.jsxs)("p", {
								children: ["This trade will cost ", I, " DBX, you will receive ~", 1.2 * I, " vDBX"]
							}), Object(O.jsxs)("p", {
								children: ["OR ", I, " USDC, you will receive ~", Re(kn(I).mul(1.2).mul(kn(ae[16]).div(1e18)), 5), " vDBX"]
							})]
						})]
					}), Object(O.jsx)(me.a, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						newestOnTop: !1,
						closeOnClick: !0,
						rtl: !1,
						pauseOnFocusLoss: !0,
						draggable: !0,
						pauseOnHover: !0
					})]
				})
			};
			const Nn = Object(y.b)(Bn || (Bn = Object(d.a)(["\n 0% { height: 0px; }\n 25% {height: 75px;}\n 50% {height: 150px;}\n 75% {height: 225px;}\n 100% { height: auto; }\n"]))),
				Sn = Object(y.b)(Mn || (Mn = Object(d.a)(["\n 0% { height: auto; }\n  25% {height: 225px;}\n 50% {height: 150px;}\n  75% {height: 75px;}\n 100% { height: 0px; }\n"]))),
				En = y.a.div(Cn || (Cn = Object(d.a)(["\n  background: rgba(0, 0, 0, 0.9);\n  box-shadow: 0px 0px 10px #e0bfb8;\n  border-radius: 10px;\n  margin: 20px 0;\n\n  .accordion-header {\n    height: 75px;\n    position: relative;\n\n    h3 {\n      margin: 0;\n      font-size: 25px;\n    }\n\n    h4 {\n      margin: 0;\n      font-size: 18px;\n    }\n\n    .open-close-icon {\n      position: absolute;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      right: 20px;\n      top: 0;\n    }\n  }\n\n  .accordion-content-", " {\n    width: 100%;\n    height: 0px;\n    overflow: hidden;\n  }\n\n  .accordion-content-", ".open {\n    animation-name: ", ";\n    animation-duration: 100ms;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n  }\n\n  .accordion-content-", ".closed {\n    animation-name: ", ";\n    animation-duration: 100ms;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n  }\n"])), (e => e.titleClass), (e => e.titleClass), Nn, (e => e.titleClass), Sn);

			function In(e) {
				let {
					title: n,
					subtitle: t,
					contentComponent: a,
					expandable: i = !0
				} = e;
				const [s, o] = Object(r.useState)(null), p = n.split(" ").join("");
				Object(r.useEffect)((() => {
					let e = document.getElementsByClassName("accordion-content-".concat(p))[0];
					!0 === s ? (e.classList.add("open"), e.classList.remove("closed")) : !1 === s ? (e.classList.add("closed"), e.classList.remove("open")) : (e.classList.remove("closed"), e.classList.remove("open"))
				}), [s]);
				return Object(O.jsxs)(En, {
					titleClass: p,
					children: [Object(O.jsxs)("div", {
						className: "accordion-header",
						onClick: () => {
							i && o(null === s || !s)
						},
						children: [Object(O.jsx)("h3", {
							children: n
						}), t && Object(O.jsx)("h4", {
							children: t
						}), i && Object(O.jsx)("div", {
							className: "open-close-icon",
							children: s ? Object(O.jsx)(sn.a, {}) : Object(O.jsx)(an.a, {})
						})]
					}), Object(O.jsx)("div", {
						className: "accordion-content-".concat(p),
						children: a
					})]
				})
			}
			var Rn;
			const Fn = y.a.div(Rn || (Rn = Object(d.a)(["\n  min-height: 225px;\n\n  .column-headers {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .c-header {\n      width: 25%;\n      border: 1px solid rgb(5, 40, 1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 5px;\n\n      p {\n        margin: 0;\n        color: white;\n        font-size: 16px;\n        color: #e0bfb8;\n      }\n    }\n  }\n\n  .column-cells {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .cell {\n      padding: 5px;\n      width: 25%;\n      border: 1px solid rgb(5, 40, 1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      p {\n        margin: 0;\n        color: white;\n      }\n    }\n\n    &:last-child {\n      border-radius: 0 0 10px 10px;\n      overflow: hidden;\n\n      .cell {\n        &:first-child {\n          border-radius: 0 0 0 10px;\n        }\n        &:last-child {\n          border-radius: 0 0 10px 0;\n        }\n      }\n    }\n  }\n"])));

			function Pn(e) {
				let {
					balances: n,
					content: t
				} = e;
				return Object(O.jsx)(Fn, {
					children: n.length > 0 ? Object(O.jsxs)(O.Fragment, {
						children: [" ", Object(O.jsxs)("div", {
							className: "column-headers",
							children: [Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.token
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.amount
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.price
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.usdValue
								})
							})]
						}), null === n || void 0 === n ? void 0 : n.map(((e, n) => Object(O.jsxs)("div", {
							className: "column-cells",
							children: [Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsx)("p", {
									children: null === e || void 0 === e ? void 0 : e.name
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsx)("p", {
									children: Ee(parseFloat(e.amount).toFixed(18), 4)
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: ["$", null === e || void 0 === e ? void 0 : e.price.toFixed(2)]
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: ["$", null === e || void 0 === e ? void 0 : e.value.toFixed(2)]
								})
							})]
						}, n)))]
					}) : Object(O.jsx)(O.Fragment, {
						children: Object(O.jsx)("h3", {
							children: "Wallet Empty"
						})
					})
				})
			}
			var Ln;
			const Wn = y.a.div(Ln || (Ln = Object(d.a)(["\n  min-height: 225px;\n\n  .column-headers {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .c-header {\n      width: 100%;\n      border: 1px solid rgb(5, 40, 1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 5px;\n\n      p {\n        margin: 0;\n        color: white;\n        font-size: 16px;\n        color: #e0bfb8;\n      }\n    }\n  }\n\n  .column-cells {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .cell {\n      padding: 5px;\n      width: 100%;\n      border: 1px solid rgb(5, 40, 1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      p {\n        margin: 0;\n        color: white;\n      }\n    }\n\n    &:last-child {\n      border-radius: 0 0 10px 10px;\n      overflow: hidden;\n\n      .cell {\n        &:first-child {\n          border-radius: 0 0 0 10px;\n        }\n        &:last-child {\n          border-radius: 0 0 10px 0;\n        }\n      }\n    }\n  }\n"])));

			function Xn(e) {
				let {
					balances: n,
					content: t
				} = e;
				return Object(O.jsx)(Wn, {
					children: n.length > 0 ? Object(O.jsxs)(O.Fragment, {
						children: [" ", Object(O.jsxs)("div", {
							className: "column-headers",
							children: [Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.pool
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.staked
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: "APR"
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.pendingRewards
								})
							})]
						}), n.map(((e, n) => Object(O.jsxs)("div", {
							className: "column-cells",
							children: [Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsx)("p", {
									children: e.name
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: ["$", e.amount.toFixed(2)]
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: [e.apr, "%"]
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: ["$", e.rewards.toFixed(2)]
								})
							})]
						}, n)))]
					}) : Object(O.jsx)(O.Fragment, {
						children: Object(O.jsx)("h2", {
							children: "No Farms Found"
						})
					})
				})
			}
			var Hn;
			const zn = y.a.div(Hn || (Hn = Object(d.a)(["\n  min-height: 225px;\n\n  .column-headers {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .c-header {\n      width: 100%;\n      border: 1px solid rgb(5, 40, 1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 5px;\n\n      p {\n        margin: 0;\n        color: white;\n        font-size: 16px;\n        color: #e0bfb8;\n      }\n    }\n  }\n\n  .column-cells {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n\n    .cell {\n      padding: 5px;\n      width: 100%;\n      border: 1px solid rgb(5, 40, 1);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      p {\n        margin: 0;\n        color: white;\n      }\n    }\n\n    &:last-child {\n      border-radius: 0 0 10px 10px;\n      overflow: hidden;\n\n      .cell {\n        &:first-child {\n          border-radius: 0 0 0 10px;\n        }\n        &:last-child {\n          border-radius: 0 0 10px 0;\n        }\n      }\n    }\n  }\n"])));

			function Qn(e) {
				let {
					balances: n,
					content: t
				} = e;
				return Object(O.jsx)(zn, {
					children: n.length > 0 ? Object(O.jsxs)(O.Fragment, {
						children: [" ", Object(O.jsxs)("div", {
							className: "column-headers",
							children: [Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.pool
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: t.staked
								})
							}), Object(O.jsx)("div", {
								className: "c-header",
								children: Object(O.jsx)("p", {
									children: "Compounded Rewards"
								})
							})]
						}), n.map(((e, n) => Object(O.jsxs)("div", {
							className: "column-cells",
							children: [Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsx)("p", {
									children: e.name
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: ["$", e.amount.toFixed(2)]
								})
							}), Object(O.jsx)("div", {
								className: "cell",
								children: Object(O.jsxs)("p", {
									children: ["$", e.rewards.toFixed(2)]
								})
							})]
						}, n)))]
					}) : Object(O.jsx)(O.Fragment, {
						children: Object(O.jsx)("h2", {
							children: "No Vaults Found"
						})
					})
				})
			}
			var Un;
			const qn = y.a.div(Un || (Un = Object(d.a)(["\n  width: 100%;\n  max-width: 1300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 0;\n  padding: 0 50px 0;\n\n  @media (max-width: 1025px) {\n    padding-top: 50px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 40px 20px;\n  }\n\n  input {\n    border-radius: 5px;\n    border: 1px solid black;\n    color: black;\n    text-align: center;\n    font-size: 17px;\n    margin-bottom: 10px;\n    width: 100%;\n  }\n\n  .content {\n    width: 100%;\n\n    .portfolio-header {\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n\n      .total-balance {\n        width: 50%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        padding-right: 10px;\n\n        h2 {\n          color: #00cf87;\n          font-size: 40px;\n          margin: 0;\n          text-align: left;\n\n          @media (max-width: 768px) {\n            font-size: 30px;\n          }\n        }\n\n        p {\n          margin: 0;\n          font-size: 25px;\n        }\n      }\n\n      .average-apr {\n        width: 50%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        padding-left: 10px;\n\n        h2 {\n          color: #00cf87;\n          font-size: 40px;\n          margin: 0;\n          text-align: right;\n\n          @media (max-width: 768px) {\n            font-size: 30px;\n          }\n        }\n\n        p {\n          margin: 0;\n          font-size: 25px;\n        }\n      }\n    }\n\n    table {\n      width: 100%;\n    }\n\n    p {\n      font-size: 12px;\n    }\n  }\n"])));
			var Vn, Yn = function(e) {
					let {
						web3Modal: n,
						loadWeb3Modal: t,
						logoutOfWeb3Modal: a,
						setPageTitle: i,
						language: s,
						address: o,
						contract: p,
						signer: l,
						prices: c,
						tokens: d,
						chainId: u
					} = e;
					const [m, y] = Object(r.useState)(""), [b, g] = Object(r.useState)(null), [h, j] = Object(r.useState)([]), [f, w] = Object(r.useState)(null), [v, T] = Object(r.useState)([]), [k, A] = Object(r.useState)(null), [B, M] = Object(r.useState)([]), [C, D] = Object(r.useState)(null), [N, S] = Object(r.useState)(null), [E, I] = Object(r.useState)([]), [R, F] = Object(r.useState)(null), [P, L] = Object(r.useState)([]), [W, X] = Object(r.useState)(null), H = x.pageTitles[s].portfolio, z = x.portfolio[s], Q = async e => {
						"" === e && (e = o);
						var n = [],
							t = 0;
						Promise.all(d.map((async a => {
							var i = 0;
							if (a.name === _[u][0].gas) {
								var s = "https://api.arbiscan.io/api?module=account&action=balance&address=" + e + "&tag=latest&apikey=GXJ7CW43TC6VN7U46GH16WC1HTMW9C1R13";
								i = (await fetch(s).then((e => e.json()))).result / 1e18
							} else i = await ee(0, l, e, a.addi, a.decimals);
							i > 0 && (t += i * parseFloat(a.price), n.push({
								name: a.name,
								amount: i,
								price: parseFloat(a.price),
								value: i * parseFloat(a.price)
							}))
						}))).then((e => {
							g(t), j(n)
						}))
					}, U = async e => {
						"" === e && (e = o);
						try {
							var n = [],
								t = 0;
							const a = p.Farms.connect(l).getPoolInfo,
								i = await a();
							Promise.all(i.map((async(a, i) => {
								const s = p.Farms.connect(l).getUser,
									r = await s(i, e),
									o = p.Farms.connect(l).getTvl,
									d = await o(i),
									u = p.Farms.connect(l).getRewardPerSecond,
									m = await u();
								var y = parseInt(m._hex) / 1e18;
								const b = p.Farms.connect(l).getMultiplier,
									x = await b();
								var g = parseInt(x._hex) / 1e3;
								const h = p.Farms.connect(l).getTotalAllocPoint,
									j = await h();
								var f = parseInt(j._hex),
									w = y * g * parseInt(a.allocPoint._hex) / f * 31536e3 * c.DBX,
									v = c[a.name],
									O = parseInt(d._hex) / 1e18 * v,
									T = parseInt(r.amount._hex) / 1e18;
								if (T > 0) {
									const s = p.Farms.connect(l).pendingRewards,
										r = await s(i, e);
									var k = parseInt(r._hex) / 1e18,
										A = c[a.name];
									k *= c.DBX, t = t + (T *= A) + k, n.push({
										name: a.name,
										amount: T,
										rewards: k,
										apr: Math.floor(w / O * 100 * 1e3) / 1e3
									})
								}
							}))).then((a => {
								Y(e, t, n)
							}))
						} catch (a) {}
					}, q = async e => {
						"" == e && (e = o);
						try {
							var n = [],
								t = 0;
							const a = p.Farms.connect(l).getPoolInfo,
								i = await a();
							Promise.all(i.map((async(a, i) => {
								if (a.isLp) {
									const d = p.Vaults.connect(l).getUser,
										u = await d(i, e),
										m = p.Farms.connect(l).getTvl,
										y = (await m(i), p.Farms.connect(l).getRewardPerSecond),
										b = await y();
									parseInt(b._hex);
									const x = p.Farms.connect(l).getMultiplier,
										g = await x();
									parseInt(g._hex);
									const h = p.Farms.connect(l).getTotalAllocPoint,
										j = await h();
									parseInt(j._hex);
									var s = parseInt(u.amount._hex) / 1e18,
										r = c[a.name];
									if (s > 0) {
										const d = p.Vaults.connect(l).pendingRewards,
											u = await d(i, e);
										var o = parseInt(u[0]) / 1e18 * c.DBX;
										o += parseInt(u[1]) / 1e18 * c.DBC, o += parseInt(u[2]) / 1e18 * c.DBX, t = t + (s *= r) + o, n.push({
											name: a.name,
											amount: s,
											rewards: o
										})
									}
								}
							}))).then((e => {
								A(t), M(n)
							}))
						} catch (a) {}
					}, V = async e => {
						"" === e && (e = o);
						try {
							const a = p.vDBX.connect(l).totalVested,
								i = await a(e),
								s = p.Mastermind.connect(l).totalVested,
								r = await s(e);
							var n = parseInt(i._hex) / 1e18 * c.DBX,
								t = parseInt(r._hex) / 1e18 * c.DBX;
							D(n + t)
						} catch (a) {}
					}, Y = async(e, n, t) => {
						"" === e && (e = o);
						try {
							var a = t,
								i = n;
							const o = p.RealYield.connect(l).getUser,
								y = await o(e),
								b = p.RealYield.connect(l).getTvl,
								x = await b(),
								g = p.RealYield.connect(l).getRewardsPerSecond,
								h = await g();
							var s = 31536e3 * (parseInt(h._hex) / 1e18) * c.WETH,
								r = (c.DBC, parseInt(x._hex) / 1e18 * c.DBC),
								d = parseInt(y.amount._hex) / 1e18;
							if (d > 0) {
								const n = p.RealYield.connect(l).pendingRewards,
									t = await n(e);
								var u = parseInt(t._hex) / 1e18,
									m = c.DBC;
								u *= c.WETH, d *= m, a.push({
									name: "DBC",
									amount: d,
									rewards: u,
									apr: Math.floor(s / r * 100 * 1e3) / 1e3
								}), i = i + d + u
							}
							K(e, i, a)
						} catch (y) {}
					}, K = async(e, n, t) => {
						"" === e && (e = o);
						try {
							var a = t,
								i = n;
							const o = p.vDBXStaking.connect(l).getUser,
								m = await o(e),
								y = p.vDBXStaking.connect(l).getTvl,
								b = await y(),
								x = p.vDBXStaking.connect(l).getApr,
								g = await x();
							var s = parseInt(g._hex),
								r = (c.DBX, parseInt(b._hex), c.DBC, parseInt(m.amount._hex) / 1e18);
							if (r > 0) {
								const n = p.vDBXStaking.connect(l).pendingRewards,
									t = await n(e);
								var d = parseInt(t._hex) / 1e18,
									u = c.DBX;
								d *= c.DBX, r *= u, a.push({
									name: "vDBX",
									amount: r,
									rewards: d,
									apr: Math.floor(1e3 * s) / 1e3
								}), i = i + r + d
							}
							w(i), T(a)
						} catch (m) {}
					};
					return Object(r.useEffect)((() => {
						p && l && o && (Q(o), U(o), q(o), V(o))
					}), [p, l, o]), Object(r.useEffect)((() => {
						i(H)
					}), []), Object(r.useEffect)((() => {
						if (v.length > 0) {
							const e = v.map((e => e.amount)).reduce(((e, n) => e + n), 0);
							let n = [];
							v.forEach((t => {
								let a = t.amount / e;
								n.push(a * t.apr)
							}));
							let t = n.reduce(((e, n) => e + n), 0);
							X(t.toFixed(2))
						}
					}), [v]), Object(O.jsxs)(qn, {
						children: [Object(O.jsx)(le, {
							title: H
						}), !n.cachedProvider && Object(O.jsx)(Be, {
							address: o,
							web3Modal: n,
							loadWeb3Modal: t,
							logoutOfWeb3Modal: a,
							language: s
						}), n.cachedProvider && Object(O.jsxs)(O.Fragment, {
							children: [Object(O.jsxs)("div", {
								className: "content",
								children: [Object(O.jsxs)("div", {
									className: "portfolio-header",
									children: [Object(O.jsxs)("div", {
										className: "total-balance",
										children: [Object(O.jsx)("h2", {
											children: z.totalBalance
										}), Object(O.jsxs)("p", {
											children: ["$", (b + f + k + C + N).toFixed(2)]
										})]
									}), Object(O.jsxs)("div", {
										className: "average-apr",
										children: [Object(O.jsx)("h2", {
											children: "Average APR"
										}), Object(O.jsx)("p", {
											children: W ? "".concat(W, "%") : "--"
										})]
									})]
								}), Object(O.jsx)(In, {
									title: z.walletBalance,
									subtitle: "$".concat((null === b || void 0 === b ? void 0 : b.toFixed(2)) || "--"),
									contentComponent: Object(O.jsx)(Pn, {
										balances: h,
										content: z
									})
								}), Object(O.jsx)(In, {
									title: z.farmsBalance,
									subtitle: "$".concat((null === f || void 0 === f ? void 0 : f.toFixed(2)) || "--"),
									contentComponent: Object(O.jsx)(Xn, {
										balances: v,
										content: z
									})
								}), Object(O.jsx)(In, {
									title: "Vaults",
									subtitle: "$".concat((null === k || void 0 === k ? void 0 : k.toFixed(2)) || "--"),
									contentComponent: Object(O.jsx)(Qn, {
										balances: B,
										content: z
									})
								}), Object(O.jsx)(In, {
									title: z.mastermindBalance,
									subtitle: "$".concat((null === C || void 0 === C ? void 0 : C.toFixed(2)) || "--"),
									contentComponent: Object(O.jsx)(Xn, {
										balances: v,
										content: z
									}),
									expandable: !1
								})]
							}), Object(O.jsxs)("div", {
								children: [Object(O.jsx)("p", {
									children: z.searchAddress
								}), Object(O.jsx)("input", {
									type: "text",
									onChange: e => (async e => {
										y(e)
									})(e.target.value),
									value: m
								}), Object(O.jsx)(be, {
									width: "100px",
									height: "30px",
									text: z.search,
									onclick: () => (async() => {
										var e = m;
										"" == e && (e = o), g(0), j([]), w(0), T([]), A(0), M([]), D(0), S(0), I([]), Q(e), U(e), q(e), V(e)
									})()
								})]
							})]
						})]
					})
				},
				Kn = t.p + "static/media/nftLaunchpadPoster.4a549148.png";
			const {
				ethers: Gn
			} = t(33), Zn = y.a.div(Vn || (Vn = Object(d.a)(['\n  padding: 10px 50px;\n  z-index: 0;\n  width: 100%;\n\n  @media (max-width: 1025px) {\n    padding-top: 50px;\n  }\n\n  @media (max-width: 425px) {\n    padding: 40px 20px;\n  }\n  \n  .content {\n    display:flex;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    h1 { \n      color: red;\n    }\n    \n    @media (max-width: 425px) {\n      flex-direction: column-reverse;\n    }\n    \n    img {\n      border-radius: 10px;\n      width: 33%;\n    }\n    \n    .mint-part {\n      padding: 0 15px;\n      width: 66%;\n      \n      p {\n        margin-bottom: 0;\n      }\n      \n      .progress-bar {\n        color: white;\n        background: black;\n        border: solid 1px white;\n        border-radius: 20px;\n        min-height: 20px;\n        \n        .progress {\n          background: rgb(0,207,135);\n          display: flex;\n          justify-content: center;\n          border-radius: 20px;\n          min-height: 20px;\n        }\n      }\n        \n      .progress-labels {\n        color: white;\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      .minted-amount {\n        font-family: "Exo 2", Sans-serif;\n        font-style: italic;\n        font-weight: bold;\n        font-size: 25px;\n        color: #e0bfb8;\n        margin-top: 20px;\n      }\n\n      .mint-count {\n        display: flex;\n        justify-content: center;\n        margin-top: 20px;\n\n        .increment-mint {\n          width: 60px;\n          height: 60px;\n          font-size: 25px;\n          font-family: "Titan One", Sans-serif;\n          font-weight: bold;\n          background: black;\n          color: #00cf87;\n          border: 1px solid #00cf87;\n          border-radius: 12px;\n          cursor: pointer;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n\n          &:hover {\n            background: #00cf87;\n            color: black;\n            cursor: pointer;\n          }\n        }\n\n        input {\n          width: 60px;\n          height: 60px;\n          border: 3px solid #00cf87;\n          border-radius: 5px;\n          font-family: "Exo 2", Sans-serif;\n          font-style: italic;\n          font-weight: bold;\n          text-align: center;\n          margin: 0 50px;\n          font-size: 25px;\n          color: #e0bfb8;\n          background: rgba(0, 0, 0, 0.7);\n        }\n      }\n\n      .mint-btn {\n        margin: 20px 0 50px 0;\n        cursor: pointer;\n        display: flex;\n        justify-content: center;\n\n        .mint-button {\n          padding: 7px 30px;\n          font-size: 25px;\n          font-family: "Titan One", Sans-serif;\n          font-weight: inherit;\n          background: black;\n          color: #00cf87;\n          border: 1px solid #00cf87;\n          border-radius: 12px;\n          cursor: pointer;\n          width: 300px;\n\n          &:hover {\n            background: #00cf87;\n            color: black;\n            cursor: pointer;\n          }\n        }\n      }\n    }\n  }\n'])));
			var Jn, _n = function(e) {
				let {
					web3Modal: n,
					loadWeb3Modal: t,
					logoutOfWeb3Modal: a,
					setPageTitle: i,
					language: s,
					address: o,
					contract: p,
					signer: l,
					prices: c,
					chainId: d
				} = e;
				const u = "NFT Launchpad",
					m = 42161,
					[y, b] = Object(r.useState)(0),
					[x, g] = Object(r.useState)(0),
					[h, j] = Object(r.useState)(0),
					[f, w] = Object(r.useState)(0),
					[v, T] = Object(r.useState)(0),
					[k, A] = Object(r.useState)(0),
					[B, M] = Object(r.useState)(0),
					[C, D] = Object(r.useState)(0),
					[N, S] = Object(r.useState)(0),
					[E, I] = Object(r.useState)(0),
					[R, F] = Object(r.useState)(0),
					[P, L] = Object(r.useState)(0),
					[W, X] = Object(r.useState)(""),
					[H, z] = Object(r.useState)(""),
					[Q, U] = Object(r.useState)(1),
					[q, V] = Object(r.useState)(!1),
					[Y, K] = Object(r.useState)(!1),
					[G, Z] = Object(r.useState)(!1),
					J = async() => {
						try {
							var e = Date.now() / 1e3;
							g(e);
							const a = p.NftLaunchpad.connect(l)._name,
								i = await a();
							b(i);
							const s = p.NftLaunchpad.connect(l).startTime,
								r = await s();
							var n = parseInt(r);
							j(n);
							const c = p.NftLaunchpad.connect(l).getCost,
								u = await c();
							T(parseInt(u) / 1e18);
							const m = p.NftLaunchpad.connect(l).cost,
								y = await m();
							w(parseInt(y) / 1e6);
							const x = p.NftLaunchpad.connect(l).paused,
								h = await x();
							A(parseInt(h));
							const f = p.NftLaunchpad.connect(l).maxSupply,
								v = await f();
							M(parseInt(v));
							const O = p.NftLaunchpad.connect(l).supplyLeft,
								k = await O();
							D(parseInt(k));
							const B = p.NftLaunchpad.connect(l).nftPerAddressLimit,
								C = await B();
							S(parseInt(C));
							const N = p.NftLaunchpad.connect(l).reservedSupply,
								E = await N();
							I(parseInt(E));
							const R = p.NftLaunchpad.connect(l).freeMints,
								P = await R(o);
							F(parseInt(P));
							const W = p.NftLaunchpad.connect(l).dbfLeft,
								H = await W();
							parseInt(H);
							var t = "";
							X("USDC"), _[d][0].tokens.map((e => {
								"USDC" === e.name && (t = e.address)
							})), z(t), L(await ne(0, l, o, t, 18, p.GhoulsMM.address))
						} catch (a) {
							console.log(a)
						}
					},
					$ = e => me.b.warn(e, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						closeOnClick: !0,
						pauseOnHover: !0,
						draggable: !0,
						progress: void 0
					}),
					ee = e => me.b.success(e, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						closeOnClick: !0,
						pauseOnHover: !0,
						draggable: !0,
						progress: void 0
					});
				let te;
				return Object(r.useEffect)((() => {
					i(u), o && p.NftLaunchpad && d === m && (J(), te ? (clearInterval(te), te = setInterval((() => {
						J()
					}), 1e4)) : te = setInterval((() => {
						J()
					}), 1e4))
				}), [o, p, l]), Object(O.jsxs)(Zn, {
					children: [Object(O.jsx)(le, {
						title: u
					}), !n.cachedProvider && Object(O.jsx)(Be, {
						address: o,
						web3Modal: n,
						loadWeb3Modal: t,
						logoutOfWeb3Modal: a,
						language: s
					}), n.cachedProvider && d !== m && Object(O.jsxs)("p", {
						children: ["This launchpad is only available on the ", "Arbitrum", " chain"]
					}), n.cachedProvider && d === m && "" === W && Object(O.jsx)("div", {
						className: "content",
						children: "Loading please wait..."
					}), n.cachedProvider && d === m && "" !== W && Object(O.jsxs)("div", {
						className: "content",
						children: [Object(O.jsx)("img", {
							src: Kn,
							alt: "launchpadposter"
						}), Object(O.jsxs)("div", {
							className: "mint-part",
							children: [Object(O.jsx)("h2", {
								children: y
							}), 1 === k && Object(O.jsx)("h1", {
								children: "Mint is currently paused!"
							}), Object(O.jsx)("h1", {
								children: "Public Mint has now finished!"
							}), Object(O.jsxs)("p", {
								children: ["Max Supply: ", B]
							}), h > x && Object(O.jsxs)("h2", {
								children: ["Mint starts: ", (() => {
									var e = h - x;
									e < 0 && (e = 0);
									var n = Math.floor(e / 86400),
										t = Math.floor((e - 86400 * n) / 3600),
										a = Math.floor((e - 86400 * n - 3600 * t) / 60),
										i = "";
									return i = (i = (i = (i = i + n + "d ") + t + "h ") + a + "m ") + Math.floor(e - 86400 * n - 3600 * t - 60 * a) + "s"
								})()]
							}), h <= x && Object(O.jsxs)(O.Fragment, {
								children: [Object(O.jsx)("div", {
									className: "progress-labels",
									children: Object(O.jsxs)("b", {
										children: [((B - C) / B * 100).toFixed(2), "% minted! (", B - C, "/", B, ")"]
									})
								}), Object(O.jsx)("div", {
									className: "progress-bar",
									children: Object(O.jsx)("div", {
										className: "progress",
										style: {
											width: "".concat((B - C) / B * 100, "%")
										}
									})
								}), Object(O.jsx)("div", {
									className: "progress-labels",
									children: Object(O.jsxs)("b", {
										children: [E, " NFTs are reserved!"]
									})
								}), Object(O.jsxs)("div", {
									className: "mint-count",
									children: [Object(O.jsx)("div", {
										className: "increment-mint",
										onClick: () => {
											1 !== Q && U(Q - 1)
										},
										children: "-"
									}), Object(O.jsx)("input", {
										type: "text",
										value: Q,
										onChange: e => {
											const n = e.target.value.replace(/\D/g, "");
											Number(n) > 10 ? ($("Max amount is 10 " + y + " per transaction"), U(10)) : Number(n) < 1 ? U(1) : U(Number(n))
										}
									}), Object(O.jsx)("div", {
										className: "increment-mint",
										onClick: () => {
											10 === Q ? $("Max amount is 10 " + y + " per transaction") : U(Q + 1)
										},
										children: "+"
									})]
								}), R > 0 && Object(O.jsxs)(O.Fragment, {
									children: [Object(O.jsxs)("p", {
										children: ["You have ", R, " free mints to claim!"]
									}), Object(O.jsx)("div", {
										className: "mint-btn",
										children: Object(O.jsx)("div", {
											className: "mint-button",
											onClick: async() => {
												try {
													Z(!0);
													const e = p.NftLaunchpad.connect(l).claim,
														n = await e();
													await n.wait();
													const t = await J();
													await t, ee("Free mints minted successfully"), Z(!1)
												} catch (e) {
													Z(!1), $(e.reason), console.log(e)
												}
											},
											children: G ? "Claiming..." : "Claim free mints"
										})
									})]
								})]
							})]
						})]
					}), Object(O.jsx)(me.a, {
						position: "top-right",
						autoClose: 5e3,
						hideProgressBar: !1,
						newestOnTop: !1,
						closeOnClick: !0,
						rtl: !1,
						pauseOnFocusLoss: !0,
						draggable: !0,
						pauseOnHover: !0
					})]
				})
			};
			const $n = y.a.div(Jn || (Jn = Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  \n  .modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .modal-content {\n    position: relative;\n  }\n  \n  .modal-image {\n    max-width: 90%;\n    max-height: 90vh;\n    width: auto;\n    height: auto;\n  }\n\n  .close-button {\n    position: absolute;\n    right: 5%;\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    color: red;\n    text-shadow: 2px 2px black;\n  }\n\n  .staking-nft-list {\n    margin: 15px;\n    color: #e0bfb8;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n\n    .rank {\n      position: absolute;\n      bottom: -15px;\n      width: 100%;\n      padding: 1px;\n      background: gold;\n      color: black;\n      font-size: 10px;\n      border-radius: 0 0 5px 5px;\n      border-right: 2px solid #00cf87;\n      border-left: 2px solid #00cf87;\n      border-bottom: 2px solid #00cf87;\n    }\n\n    p {\n      margin: 0;\n    }\n\n    img {\n      border: 2px solid #00cf87;\n      background-color: transparent;\n      border-radius: 5px;\n      width: ", ";\n      height: ", ";\n    }\n  }\n"])), (e => "small" === e.imageSize ? "100px" : "medium" === e.imageSize ? "200px" : "300px"), (e => "small" === e.imageSize ? "100px" : "medium" === e.imageSize ? "200px" : "300px")),
				et = e => {
					let {
						imageUrl: n,
						onClose: t
					} = e;
					return Object(O.jsx)("div", {
						className: "modal",
						children: Object(O.jsxs)("div", {
							className: "modal-content",
							children: [Object(O.jsx)("img", {
								src: n,
								alt: "Modal Content",
								className: "modal-image"
							}), Object(O.jsx)("button", {
								className: "close-button",
								onClick: t,
								children: "\u2715"
							})]
						})
					})
				};
			var nt, tt = e => {
				let {
					nftData: n,
					imageSize: t
				} = e;
				const [a, i] = Object(r.useState)(!1), [s, o] = Object(r.useState)("");
				return Object(O.jsxs)($n, {
					imageSize: t,
					children: [n.map(((e, n) => Object(O.jsxs)("div", {
						className: "staking-nft-list",
						children: [Object(O.jsxs)("p", {
							children: ["#", e.id]
						}), Object(O.jsx)("div", {
							onClick: () => {
								return n = e.url, o(n), void i(!0);
								var n
							},
							children: Object(O.jsx)("img", {
								alt: "nft",
								src: e.url,
								width: "200px",
								height: "200px"
							})
						})]
					}, n))), a && Object(O.jsx)(et, {
						imageUrl: s,
						onClose: () => {
							o(""), i(!1)
						}
					})]
				})
			};
			const at = y.a.div(nt || (nt = Object(d.a)(["\n  margin-bottom: 20px;\n\n  .all-filters {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 100%;\n\n    .filter-group {\n      width: 150px;\n      margin: 10px;\n\n      @media (max-width: 375px) {\n        margin: 5px 10px;\n        width: 100%;\n      }\n\n      p {\n        color: white;\n        margin: 0;\n      }\n\n      select {\n        width: 120px;\n        background: #00cf87;\n        border-radius: 5px;\n        border: none;\n        color: black;\n        font-weight: 900;\n        height: 25px;\n        font-size: 14px;\n        text-align: center;\n\n        @media (max-width: 375px) {\n          width: 80%;\n        }\n      }\n    }\n  }\n"])));
			var it, st = e => {
				let {
					order: n,
					sortBy: t,
					imageSize: a,
					nftToView: i,
					update: s
				} = e;
				return Object(O.jsx)(at, {
					children: Object(O.jsxs)("div", {
						className: "all-filters",
						children: [Object(O.jsxs)("div", {
							className: "filter-group",
							children: [Object(O.jsx)("p", {
								children: "Collection:"
							}), Object(O.jsx)("select", {
								onChange: e => s(n, t, a, e.target.value),
								children: Object(O.jsx)("option", {
									value: "DegenGhouls",
									children: "DegenGhouls"
								})
							})]
						}), Object(O.jsxs)("div", {
							className: "filter-group",
							children: [Object(O.jsx)("p", {
								children: "Size:"
							}), Object(O.jsxs)("select", {
								onChange: e => s(n, t, e.target.value, i),
								children: [Object(O.jsx)("option", {
									value: "small",
									children: "Small"
								}), Object(O.jsx)("option", {
									value: "medium",
									children: "Medium"
								}), Object(O.jsx)("option", {
									value: "large",
									children: "Large"
								})]
							})]
						}), Object(O.jsxs)("div", {
							className: "filter-group",
							children: [Object(O.jsx)("p", {
								children: "Sort By:"
							}), Object(O.jsx)("select", {
								onChange: e => s(n, e.target.value, a, i),
								children: Object(O.jsx)("option", {
									value: "id",
									children: "ID"
								})
							})]
						}), Object(O.jsxs)("div", {
							className: "filter-group",
							children: [Object(O.jsx)("p", {
								children: "Order:"
							}), Object(O.jsxs)("select", {
								onChange: e => s(e.target.value, t, a, i),
								children: [Object(O.jsx)("option", {
									value: "ascending",
									children: "Ascending"
								}), Object(O.jsx)("option", {
									value: "descending",
									children: "Descending"
								})]
							})]
						})]
					})
				})
			};
			const rt = y.a.div(it || (it = Object(d.a)(["\n  width: 100%;\n  max-width: 1440px;\n  z-index: 0;\n  min-height: 70vh;\n\n  @media (max-width: 1024px) {\n    padding-top: 50px;\n  }\n\n  .content {\n    width: 80%;\n    font-size: 20px;\n    font-weight: 500;\n    color: #e0bfb8;\n    margin: auto;\n\n    @media (max-width: 768px) {\n      width: 100%;\n    }\n\n    .gallery-subtitle {\n      margin-top: 15px;\n    }\n  }\n\n  .cards {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n\n    @media (max-width: 768px) {\n      padding: 0 10px;\n    }\n\n    @media (max-width: 419px) {\n      justify-content: center;\n    }\n  }\n\n  .connect-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h2 {\n      color: #00cf87;\n    }\n  }\n\n  .pagination {\n    display: flex;\n    width: 190px;\n    height: 30px;\n    justify-content: space-around;\n    color: white;\n    border: 1px solid #00cf87;\n    margin: auto;\n    border-radius: 5px;\n\n    .left-arrow {\n      width: 100%;\n      height: 100%;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      font-size: 20px;\n      padding-top: 5px;\n      background: #00cf87;\n      color: black;\n    }\n\n    .page-number {\n      width: 100%;\n      height: 100%;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .right-arrow {\n      width: 100%;\n      height: 100%;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      font-size: 20px;\n      padding-top: 5px;\n      background: #00cf87;\n      color: black;\n    }\n  }\n"])));

			function ot(e) {
				let {
					setPageTitle: n,
					language: t,
					address: a,
					contract: i,
					signer: s,
					web3Modal: o,
					loadWeb3Modal: p,
					logoutOfWeb3Modal: l
				} = e;
				const [c, d] = Object(r.useState)("small"), [u, m] = Object(r.useState)("DegenGhouls"), [y, b] = Object(r.useState)(1), [x, g] = Object(r.useState)([]), [h, j] = Object(r.useState)("id"), [f, w] = Object(r.useState)("ascending"), [v, T] = Object(r.useState)([]), k = "Gallery";
				Object(r.useEffect)((() => {
					n(k)
				}), []);

				function A(e, n, t, a) {
					w(e), j(n), d(t), m(a);
					let i = "DegenGhouls" === a ? x : [],
						s = [];
					s = "ascending" === e ? i.sort(((e, t) => e[n] - t[n])) : i.sort(((e, t) => t[n] - e[n]));
					let r = [];
					for (let o = 0; o < s.length; o++) {
						const e = r[r.length - 1];
						e && 50 !== e.length ? e.push(s[o]) : r.push([s[o]])
					}
					T(r)
				}
				return Object(r.useEffect)((() => {
					(async() => {
						let e = [],
							n = [];
						try {
							var t;
							const r = null === (t = i.NftLaunchpad) || void 0 === t ? void 0 : t.connect(s).walletOfOwner;
							if (r) {
								let t = await r(a);
								e = await t.map((e => parseInt(e._hex)));
								let i = e.map(((e, n) => ({
									id: e,
									url: "https://degenbrainfinance.mypinata.cloud/ipfs/QmNkX7sgt1wL3pwUakpEyqT29u8jrnb6HRF9bvHDJGvz5F/" + e + ".png"
								})));
								i = i.sort(((e, n) => e.id - n.id)), n = [...i]
							}
						} catch {}
						g(n), A(f, h, c, u)
					})()
				}), [a, i, s]), Object(O.jsxs)(rt, {
					imageSize: c,
					children: [Object(O.jsx)(le, {
						title: k
					}), Object(O.jsxs)("div", {
						className: "content",
						children: [Object(O.jsx)(st, {
							order: f,
							sortBy: h,
							imageSize: c,
							nftToView: u,
							update: A
						}), Object(O.jsxs)("div", {
							className: "pagination",
							children: [Object(O.jsx)("div", {
								onClick: () => {
									b(y > 1 ? y - 1 : 1)
								},
								className: "left-arrow",
								children: "<"
							}), Object(O.jsx)("div", {
								className: "page-number",
								children: y + " of " + v.length
							}), Object(O.jsx)("div", {
								onClick: () => {
									b(y < v.length ? y + 1 : y)
								},
								className: "right-arrow",
								children: ">"
							})]
						}), x.length > 0 && Object(O.jsx)(tt, {
							nftData: v[y - 1] || [],
							imageSize: c
						}), 0 === x.length && Object(O.jsx)("div", {
							className: "content",
							children: Object(O.jsx)("p", {
								children: "Nothing to see here, just spider webs and regret"
							})
						})]
					})]
				})
			}
			var pt;
			const {
				ethers: lt
			} = t(33), ct = Y(W.arbitrum.name), dt = y.a.div(pt || (pt = Object(d.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  min-height: 100vh;\n\n  .Toastify__toast-container--top-right {\n    margin-top: 65px;\n    z-index: 10;\n  }\n\n  .background {\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    left: 0;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n    background-color: #1f1f1f;\n\n    .overlay {\n      background: rgba(0, 0, 0, 0.8);\n      width: 100vw;\n      height: 100vh;\n      position: fixed;\n    }\n\n    img {\n      width: 50%;\n\n      @media (max-width: 768px) {\n        width: 90%;\n      }\n    }\n\n    .galaxy {\n      position: fixed;\n      width: 100vw;\n      height: 100vh;\n      z-index: -1;\n    }\n  }\n"])));
			var ut = function(e) {
				const [n, t] = Object(r.useState)(""), [a, i] = Object(r.useState)(localStorage.getItem("language") || "english");
				Object(r.useEffect)((() => {
					localStorage.setItem("language", a)
				}), [a]);
				const [s, o] = Object(r.useState)(), [p, l] = Object(r.useState)(), c = ["arbitrum"], [d, y] = Object(r.useState)(c[0]);
				Object(r.useEffect)((() => {
					localStorage.setItem("network", d)
				}), [d]);
				const b = W[d],
					x = function(e) {
						let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						const [t, a] = Object(r.useState)(null), i = Object(r.useCallback)((async() => {
							try {
								const n = await Promise.race(e.map(G)),
									t = await n;
								a(t)
							} catch (n) {
								console.log(n)
							}
						}), [e]);
						return Object(r.useEffect)((() => {
							n && 1 === (null === n || void 0 === n ? void 0 : n._network.chainId) ? a(n) : i()
						}), [JSON.stringify(e), n]), t
					}([b.rpcUrl]),
					g = async() => {
						await ct.clearCachedProvider(), s && s.provider && "function" == typeof s.provider.disconnect && await s.provider.disconnect(), setTimeout((() => {
							window.location.reload()
						}), 1)
					},
					h = Object(u.d)(s, x).signer,
					j = x && x._network && x._network.chainId,
					f = h && h.provider && h.provider._network && h.provider._network.chainId,
					w = {
						externalContracts: Q.a || {}
					},
					v = Object(u.c)(h, w, j);
				Object(r.useEffect)((() => {
					!async function() {
						if (h) {
							const e = await h.getAddress();
							l(e)
						}
					}()
				}), [h, v]);
				const T = Object(r.useCallback)((async() => {
					const e = await ct.requestProvider();
					o(new lt.providers.Web3Provider(e)), e.on("chainChanged", (n => {
						o(new lt.providers.Web3Provider(e))
					})), e.on("accountsChanged", (() => {
						o(new lt.providers.Web3Provider(e))
					})), e.on("disconnect", ((e, n) => {
						g()
					}))
				}), [o]);
				Object(r.useEffect)((() => {
					ct.cachedProvider && T();
					(async() => {
						await ct.isSafeApp() && T()
					})()
				}), [T]);
				const [k, A] = Object(r.useState)({}), [B, C] = Object(r.useState)({});
				return Object(r.useEffect)((() => {
					(async() => {
						var e = [],
							n = await fetch("https://api.dbx.finance/getTokens").then((e => e.json()));
						n.map((n => {
							e[n.name] = n.price
						})), A(e), C(n)
					})()
				}), []), Object(O.jsx)("div", {
					className: "App",
					children: Object(O.jsxs)(dt, {
						children: [Object(O.jsxs)("div", {
							className: "background",
							children: [Object(O.jsx)("div", {
								className: "overlay"
							}), Object(O.jsx)("img", {
								className: "galaxy",
								alt: "Animated Robo Brain",
								src: F
							}), Object(O.jsx)("img", {
								alt: "Animated Robo Brain",
								src: P
							})]
						}), Object(O.jsx)(M, {
							language: a,
							setLanguage: i,
							pageTitle: n,
							address: p,
							contract: v,
							web3Modal: ct,
							loadWeb3Modal: T,
							logoutOfWeb3Modal: g,
							networkOptions: c,
							selectedNetwork: d,
							setSelectedNetwork: y,
							prices: k
						}), Object(O.jsx)(H, {
							localChainId: j,
							selectedChainId: f,
							targetNetwork: b,
							logoutOfWeb3Modal: g
						}), Object(O.jsxs)(m.c, {
							children: [Object(O.jsx)(m.a, {
								exact: !0,
								path: "/",
								children: Object(O.jsx)(ue, {
									setPageTitle: t,
									language: a,
									chainId: b.chainId,
									tokens: B
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/swap",
								children: Object(O.jsx)(De, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/liquidity",
								children: Object(O.jsx)(nn, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/farms",
								children: Object(O.jsx)(un, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/staking",
								children: Object(O.jsx)(bn, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/vaults",
								children: Object(O.jsx)(On, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/mastermind",
								children: Object(O.jsx)(Dn, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/portfolio",
								children: Object(O.jsx)(Yn, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									tokens: B,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/nftlaunchpad",
								children: Object(O.jsx)(_n, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									chainId: b.chainId
								})
							}), Object(O.jsx)(m.a, {
								exact: !0,
								path: "/gallery",
								children: Object(O.jsx)(ot, {
									web3Modal: ct,
									loadWeb3Modal: T,
									logoutOfWeb3Modal: g,
									setPageTitle: t,
									language: a,
									address: p,
									contract: v,
									signer: h,
									prices: k,
									chainId: b.chainId
								})
							})]
						}), Object(O.jsx)(R, {
							language: a
						})]
					})
				})
			};
			t(699);
			window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ = !0;
			const mt = {
					dark: "".concat(".", "/dark-theme.css")
				},
				yt = new a.a({
					cache: new i.a
				});
			c.a.render(Object(O.jsx)(s.a, {
				client: yt,
				children: Object(O.jsx)(o.a, {
					themeMap: mt,
					defaultTheme: "dark",
					children: Object(O.jsx)(p.a, {
						children: Object(O.jsx)(ut, {})
					})
				})
			}), document.getElementById("root"))
		}
	},
	[
		[700, 1, 2]
	]
]);
