export default class GetSpecies {
  getEmoji(url) {
    switch (url) {
      case "https://swapi.co/api/species/1/":
        return '🙂';
        break;
      case "https://swapi.co/api/species/2/":
        return '🤖';
        break;
      case "https://swapi.co/api/species/3/":
        return '🐵';
        break;
      case "https://swapi.co/api/species/4/":
        return '👽';
        break;
      case "https://swapi.co/api/species/5/":
        return '🐌';
        break;
      case "https://swapi.co/api/species/6/":
        return '🤢';
        break;
      case "https://swapi.co/api/species/7/":
        return '🐲';
        break;
      case "https://swapi.co/api/species/8/":
        return '🐸';
        break;
      case "https://swapi.co/api/species/9/":
        return '🐻';
        break;
      case "https://swapi.co/api/species/10/":
        return '🎭';
        break;
      case "https://swapi.co/api/species/11/":
        return '😱';
        break;
      case "https://swapi.co/api/species/12/":
        return '🐉';
        break;
      case "https://swapi.co/api/species/13/":
        return '🦇';
        break;
      case "https://swapi.co/api/species/14/":
        return '👺';
        break;
      case "https://swapi.co/api/species/15/":
        return '😨';
        break;
      case "https://swapi.co/api/species/16/":
        return '🦎';
        break;
      case "https://swapi.co/api/species/17/":
        return '🐁';
        break;
      case "http://swapi.co/api/species/18/":
        return '🕷';
        break;
      case "http://swapi.co/api/species/19/":
        return '🐛';
        break;
      case "http://swapi.co/api/species/20/":
        return '👹';
        break;
      case "http://swapi.co/api/species/21/":
        return '💀';
        break;
      case "http://swapi.co/api/species/22/":
        return '😡';
        break;
      default:
        return '✨';
        break;
    }
  }
}
