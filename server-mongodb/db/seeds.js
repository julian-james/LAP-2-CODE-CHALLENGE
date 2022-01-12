const db = connect("mongodb://localhost:27017/journal")


db.posts.drop()


db.posts.insertMany([
    {
        title: "Shoes: Expectations vs. Reality",
        pseudonym: "SOPHIA GUERRERO",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies aliquet tempor. Proin fermentum tristique justo ac maximus. Maecenas imperdiet lorem at odio eleifend, suscipit viverra nibh euismod. Nullam viverra consectetur ex, vel fermentum turpis dapibus eget. Vivamus dictum blandit tincidunt. In imperdiet dolor in ipsum gravida, sit amet suscipit est tincidunt. Ut eget magna quis leo semper cursus. Etiam ac posuere nunc, ut hendrerit massa. Vivamus tristique bibendum semper. Vestibulum interdum ac sem vitae finibus."
    },
    {
        title: "Will Kale Ever Rule the World?",
        pseudonym: "KEITH WHITE",
        body: "Proin commodo non justo et tincidunt. Suspendisse at urna sit amet felis commodo ultrices. Sed sed enim pulvinar, viverra felis at, commodo diam. Fusce est mi, posuere eget tristique nec, efficitur sit amet urna. Mauris placerat augue nec laoreet vehicula. Donec risus justo, sagittis at tincidunt vitae, dignissim sed ligula. Nulla accumsan dictum tellus id gravida."
    },
    {
        title: "Next Big Thing in Fruit",
        pseudonym: "HAVEN SNYDER",
        body: "Mauris iaculis, tortor quis facilisis scelerisque, nisl est lacinia quam, vitae feugiat augue massa id arcu. Cras eu lorem convallis, sodales ipsum sed, blandit nunc. Donec vel pellentesque eros. In metus ante, tincidunt ac erat quis, imperdiet tincidunt arcu. Phasellus sed luctus leo, non molestie nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam semper placerat tellus, nec tincidunt nisl tristique in. Pellentesque in velit libero. Curabitur egestas eros quis molestie efficitur."
    },
    {
        title: "Gates Explained in Fewer than 140 Characters",
        pseudonym: "DARELL WRIGHT",
        body: "Suspendisse porttitor semper laoreet. Fusce sem magna, venenatis at diam sit amet, convallis tempor metus. Nulla eget ex lorem. Pellentesque nisi ligula, dignissim in est vitae, vestibulum euismod nisl. Donec eu justo vitae enim dignissim scelerisque. Sed a convallis massa. Nunc convallis, sapien vitae mollis condimentum, neque urna ultrices nisi, eu venenatis ipsum neque sit amet risus. Proin vel tempus metus, a maximus leo. Fusce malesuada purus et ullamcorper rhoncus. Sed porta massa quis magna feugiat, vel pharetra ex laoreet."
    },
    {
        title: "Why Trains are More Popular than Beyonce",
        pseudonym: "KERRY RYAN",
        body: "Aliquam ac hendrerit arcu, id auctor sem. Curabitur auctor felis metus, non vehicula elit finibus a. Sed ornare sodales metus, eget commodo arcu tempus non. Nunc fringilla odio sit amet leo varius, id sodales odio vulputate. Nam finibus risus vitae ipsum maximus, eu tristique odio consectetur. Sed ante dui, ultrices vitae semper at, egestas id diam. Nam pulvinar lectus ut condimentum fringilla. Maecenas consequat sem a orci facilisis, in blandit nulla posuere."
    },
    {
        title: "The 6 Best Resources for Soup",
        pseudonym: "BRUNO CRAIG",
        body: "Integer ut tincidunt mi. Suspendisse mattis eleifend neque, sit amet congue magna ultrices at. Sed sit amet pulvinar turpis. Aenean lacinia ipsum scelerisque eros sodales, at feugiat ante venenatis. Sed volutpat eros tortor, non finibus tortor ultrices quis. Maecenas auctor odio ut enim condimentum luctus."
    },
    {
        title: "13 Unexpected Ways Poodles Can Give You Better Hair",
        pseudonym: "KEVIN FITZGERALD",
        body: "Cras vel libero eget nunc hendrerit convallis vel sit amet nunc. Nunc pretium est eu tincidunt gravida. Integer interdum eleifend nibh sit amet varius. Quisque dui sem, luctus id imperdiet quis, sodales ac dolor. Donec tempor convallis massa, et faucibus massa sodales id. Aliquam dignissim sodales diam. Duis id nunc sed dolor lobortis dignissim. Duis id gravida eros. Aliquam posuere, lectus et luctus ultricies, augue justo pellentesque metus, vitae blandit dui augue sit amet nisl."
    },
    {
        title: "Why Envelopes are the Best Thing Since Sliced Bread",
        pseudonym: "CYRIL SHILLINGFORD",
        body: "Vestibulum semper eros neque. Nam at faucibus quam, sed placerat urna. Proin eget erat dolor. Nulla justo tortor, commodo sit amet lectus id, lobortis egestas neque. Ut luctus, turpis a mollis ornare, risus nulla ultricies velit, at cursus odio lacus vitae mauris. Donec in suscipit diam. Proin mattis lorem urna, non laoreet augue molestie eget."
    },
    {
        title: "18 Facts About Strawberries That'll Keep You Up at Night",
        pseudonym: "SKYLAR PEARSON",
        body: "Donec mattis lacus id mi tempor condimentum. Duis sed tristique nisi. Aliquam erat volutpat. Integer venenatis mattis metus nec ornare. Suspendisse enim augue, vehicula viverra lacinia vitae, imperdiet quis elit. Phasellus lobortis convallis feugiat. Ut eu tempus turpis. Nullam lobortis, lectus ut lobortis fringilla, est arcu tempor mauris, ac vehicula massa est nec nibh. Fusce dignissim odio iaculis consectetur aliquam. Nullam enim augue, feugiat ac lacus sit amet, elementum mollis velit. Ut sit amet scelerisque nisl, vitae finibus libero. Pellentesque hendrerit varius placerat."
    },
    {
        title: "The 10 Worst Songs About Jugs",
        pseudonym: "PIERS CRAWFORD",
        body: "Integer condimentum tortor ut turpis sodales hendrerit. Sed dictum tempor est. Nullam suscipit eget tortor non ornare. Integer convallis mauris vel arcu ullamcorper, tincidunt lobortis lacus pharetra. Proin vel ligula a lectus finibus sodales. Fusce vitae felis consequat, porttitor risus ac, aliquet tortor. Morbi feugiat dictum urna, at molestie nisl congue in."
    },
    {
        title: "19 Secrets About Paracetamol the Government Is Hiding ",
        pseudonym: "ROSA MALONE",
        body: " Sed purus sapien, faucibus vel blandit sit amet, placerat consequat justo. Donec malesuada semper ante, non tempus arcu gravida nec. Aliquam condimentum ultricies suscipit. Ut a tempor turpis, vitae scelerisque mi. Vivamus non volutpat magna, quis ornare turpis."
    },
    {
        title: "How Lampstands Can Get You Your Heart's Desire",
        pseudonym: "SHAE REID",
        body: "Vivamus accumsan, arcu ac aliquet lobortis, massa erat fringilla ipsum, vel luctus leo libero eu eros. Praesent tempor suscipit purus sed dictum. Phasellus scelerisque turpis vitae lectus fermentum, scelerisque ullamcorper nibh malesuada. Sed non tellus quis orci fermentum consequat eu vel lectus. In ultrices ultrices dapibus."
    }
])
