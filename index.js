const isArray = require("isarray")
const map = require("array-map")

const immo = require("@_immo/return")
const isuseless = require("is-useless").isuseless
const vValue = require("vvalue")
const _ = require("lodash")
const underscore = require("underscore")
const literally = require("literally")
const constant = require("const")
const lodashdotconstant = require("lodash.constant")
const lodashdotidentity = require("lodash.identity")

const vretriever = {
	retrieve(value) {
		let result
		if (isArray(value)) {
			result = map(value, v => vretriever.retrieve(v))
		} else {
			result = value
		}
		return immo(
			isuseless(
				vValue(
					_.identity(
						underscore.identity(
							lodashdotidentity(
								literally(
									constant(
										lodashdotconstant(
											_.constant(underscore.constant(result)())()
										)()
									)()
								)()
							)
						)
					)
				)
			)
		)
	}
}

module.exports = vretriever
