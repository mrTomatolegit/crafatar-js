class Crafatar {
    constructor() {}

    /**
     *
     * @param {string} uuid The UUID of a player
     * @param {number?} size The size for avatars in pixels. `1 - 512`
     * @param {boolean?} overlay Apply the overlay to the avatar.
     * @param {string?} dflt The fallback to be used when the requested image cannot be served. You can use a `custom URL`, any `uuid`, or `MHF_Steve`/`MHF_Alex`
     */
    static getAvatar(uuid, size, overlay, dflt) {
        let constructedURL = `https://crafatar.com/avatars/${uuid}`
        let changed = false
        if (size) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}size=${size}`
            changed = true
        }
        if (overlay) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}overlay`
            changed = true
        }
        if (dflt) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}default=${dflt}`
            changed = true
        }
        return constructedURL
    }

    /**
     *
     * @param {string} uuid The UUID of a player
     * @param {number?} scale The scale factor for renders. `1 - 10`
     * @param {boolean?} overlay Apply the overlay to the avatar.
     * @param {string?} dflt The fallback to be used when the requested image cannot be served. You can use a `custom URL`, any `uuid`, or `MHF_Steve`/`MHF_Alex`
     */
    static getHead(uuid, scale, overlay, dflt) {
        let constructedURL = `https://crafatar.com/renders/head/${uuid}`
        let changed = false
        if (scale) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}scale=${scale}`
            changed = true
        }
        if (overlay) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}overlay`
            changed = true
        }
        if (dflt) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}default=${dflt}`
            changed = true
        }
        return constructedURL
    }

    /**
     *
     * @param {string} uuid The UUID of a player
     * @param {number?} size The size for avatars in pixels. `1 - 512`
     * @param {boolean?} overlay Apply the overlay to the avatar.
     * @param {string?} dflt The fallback to be used when the requested image cannot be served. You can use a `custom URL`, any `uuid`, or `MHF_Steve`/`MHF_Alex`
     */
    static getBody(uuid, scale, overlay, dflt) {
        let constructedURL = `https://crafatar.com/renders/body/${uuid}`
        let changed = false
        if (scale) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}scale=${scale}`
            changed = true
        }
        if (overlay) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}overlay`
            changed = true
        }
        if (dflt) {
            constructedURL = `${constructedURL}${changed ? `&` : `?`}default=${dflt}`
            changed = true
        }
    }

    /**
     *
     * @param {string} uuid The UUID of a player
     * @param {string?} dflt The fallback to be used when the requested image cannot be served. You can use a `custom URL`, any `uuid`, or `MHF_Steve`/`MHF_Alex`
     */
    static getSkin(uuid, dflt) {
        let constructedURL = `https://crafatar.com/skins/${uuid}`
        if (dflt) {
            constructedURL = `${constructedURL}?default=${dflt}`
        }
        return constructedURL
    }

    /**
     *
     * @param {string} uuid The UUID of a player
     * @param {string?} dflt The fallback to be used when the requested image cannot be served. You can use a `custom URL`, any `uuid`, or `MHF_Steve`/`MHF_Alex`
     */
    static getCapes(uuid, dflt) {
        let constructedURL = `https://crafatar.com/capes/${uuid}`
        if (dflt) {
            constructedURL = `${constructedURL}?default=${dflt}`
        }
        return constructedURL
    }
}

module.exports = Crafatar