const getAvatar = (scenario, image) => {
    switch (scenario) {
        case 1:
            switch (image) {
                case 'main':
                    return require(`./../assets/scenarios/1/main.png`);
                case 'friend1':
                    return require(`./../assets/scenarios/1/friend1.png`);
                case 'friend2':
                    return require(`./../assets/scenarios/1/friend2.png`);
                case 'good':
                    return require(`./../assets/scenarios/1/good.png`);
                case 'bad':
                    return require(`./../assets/scenarios/1/bad.png`);
                default:
                    return require(`./../assets/scenarios/1/main.png`);
            }
        case 2:
            switch (image) {
                case 'main':
                    return require(`./../assets/scenarios/2/main.png`);
                case 'friend1':
                    return require(`./../assets/scenarios/2/friend1.png`);
                case 'friend2':
                    return require(`./../assets/scenarios/2/friend2.png`);
                case 'good':
                    return require(`./../assets/scenarios/2/good.png`);
                case 'bad':
                    return require(`./../assets/scenarios/2/bad.png`);
                default:
                    return require(`./../assets/scenarios/2/main.png`);
            }
        case 3:
            switch (image) {
                case 'main':
                    return require(`./../assets/scenarios/3/main.png`);
                case 'friend1':
                    return require(`./../assets/scenarios/3/friend1.png`);
                case 'friend2':
                    return require(`./../assets/scenarios/3/friend2.png`);
                case 'good':
                    return require(`./../assets/scenarios/3/good.png`);
                case 'bad':
                    return require(`./../assets/scenarios/3/bad.png`);
                default:
                    return require(`./../assets/scenarios/3/main.png`);
            }
        default:
            return require(`./../assets/scenarios/1/main.png`);
    }
}

export { getAvatar };