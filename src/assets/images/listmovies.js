    document.getElementById("filter_collapsed").style.display="inline-block";
    document.getElementById("filter_collapse").style.display="inline-block";
    document.getElementById("filter_expanded").style.display="none";

    function expand_filter()
    {
        document.getElementById("filter_collapsed").style.display="none";
        document.getElementById("filter_expanded").style.display="block";
    }

    function collapse_filter()
    {
        document.getElementById("filter_collapsed").style.display="inline-block";
        document.getElementById("filter_expanded").style.display="none";
    }


    function on_platforms_change()
    {
        var platlist = document.getElementById("m_system");
        var gamelist = document.getElementById("m_game");
        var save_select = new Array();
        var choosen = new Array();
        var platentries = platlist.length;
        var gameentries = gamelist.length;
        var ccount = 0;
        for(var idx = 0; idx < platentries; idx++)
            if(platlist.options[idx].selected) {
                choosen[platlist.options[idx].value] = true;
                ccount = ccount + 1;
            }
        if(ccount == 0)
            for(var idx = 0; idx < platentries; idx++)
                choosen[platlist.options[idx].value] = true;
        for(var idx = 0; idx < gameentries; idx++)
            if(gamelist.options[idx].selected)
                save_select[gamelist.options[idx].value] = true;
        while(gamelist.length != 0)
            gamelist.remove(0);
        for(var idx = 0; idx < gamedata.length; idx++) {
            if(!choosen[gamedata[idx].platform])
                continue;
            var elem = document.createElement("option");
            elem.text = gamedata[idx].name + " (" + gamedata[idx].platform + ")";
            elem.value = gamedata[idx].id;
            if(save_select[elem.value])
                elem.selected = true;
            gamelist.add(elem);
        }
    }

    function generate_tokens_list(listname, prefix, postfix)
    {
        var e = document.getElementById(listname);
        var ret = "";
        for(var i = 0; i < e.length; i++)
            if(e.options[i].selected)
                ret = ret + "-" + prefix + e.options[i].value + postfix;
        return ret;
    }

    function generate_tokens_combobox(listname, prefix, postfix)
    {
        var e = document.getElementById(listname);
        var ret = "";
        for(var i = 0; i < e.length; i++)
            if(e.options[i].selected && e.options[i].value != "NONE")
                ret = ret + "-" + prefix + e.options[i].value + postfix;
        return ret;
    }

    function generate_tokens_comboboxv(listname, value, token)
    {
        var e = document.getElementById(listname);
        for(var i = 0; i < e.length; i++)
            if(e.options[i].selected && e.options[i].value == value)
                return "-" + token;
        return "";
    }

    function generate_token_checkbox(checkname, token)
    {
        var e = document.getElementById(checkname);
        if(e.checked)
            return "-" + token;
        return "";
    }


    function generate_filter()
    {
        var page = "/Movies";
        page = page + generate_tokens_list("m_tier", "", "");
        page = page + generate_tokens_list("m_flags", "", "");
        page = page + generate_tokens_list("m_system", "", "");
        page = page + generate_tokens_list("m_year", "Y", "");
        page = page + generate_tokens_list("m_game", "", "G");
        page = page + generate_tokens_list("m_group", "Group", "");
        page = page + generate_tokens_combobox("m_category", "C", "");
        page = page + generate_tokens_combobox("m_sort", "Rating", "");
        page = page + generate_token_checkbox("m_noscreenshot", "NoScreenshot");
        page = page + generate_token_checkbox("m_notier", "NoTier");
        page = page + generate_token_checkbox("m_noflags", "NoFlags");
        page = page + generate_tokens_comboboxv("m_recn", "rec", "Rec");
        page = page + generate_tokens_comboboxv("m_recn", "notable", "Notable");
        page = page + generate_tokens_comboboxv("m_recn", "recnotable", "Rec-Notable");
        page = page + generate_tokens_comboboxv("m_obs", "obs", "Obs");
        page = page + generate_tokens_comboboxv("m_obs", "obsonly", "Obsonly");
        page = page + ".html";
        if(page == "/Movies.html")
            page = "/Movies-All.html";
        document.location.href = page;
        return false;
    }
